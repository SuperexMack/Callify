import express, { json } from "express"
import dotenv from "dotenv"
// import { Octokit } from "octokit"
import jwt from "jsonwebtoken"
import { prisma } from "../PrismaLab/prisma.js"
dotenv.config()
const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const JWT_SECRET = process.env.JWT_SECRET
const router = express.Router()

console.log("done")

router.get("/auth/github",async(req,res)=>{
    console.log("We are coming")
    res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=repo read:user`
  );
})

router.get("/auth/github/callback",async(req,res)=>{

  try{
    console.log("This is the callback")
    let code = req.query.code
    let token = await fetch("https://github.com/login/oauth/access_token",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            Accept: "application/json",
        },
        body:JSON.stringify({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code,
        })
    })

    console.log("Aandar tak")

    let access_token_getter = await token.json()
    // console.log(access_token_getter)
    let access_token = access_token_getter.access_token

    const userData = await fetch("https://api.github.com/user",{
        method:"GET",
        headers:{
            Authorization: `Bearer ${access_token}`
        }
    })
    

    let allDataUser = await userData.json()
    // console.log({
    //     githubId: allDataUser.id,
    //     username: allDataUser.login,
    //     avatar: allDataUser.avatar_url,
    // })
    let userObject = {
        githubId: access_token,
        username: allDataUser.login,
        avatar: allDataUser.avatar_url,
    } 

 


    // Checking is the user already present or not

    let checkingUser = await prisma.user.findFirst({
      where:{
        username:userObject.username
      }
    })

    if(checkingUser){
      let gettingId = checkingUser.id
      let jwtokenGen = jwt.sign({gettingId},JWT_SECRET)
      res.cookie("token",jwtokenGen,{
        httpOnly:true,
        secure:false,
        sameSite:"lax",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      res.redirect(`http://localhost:3000/Auth`)
      return
    }

    let userCreate = await prisma.user.create({
      data:{
        username:userObject.username
      }
    })

    if(userCreate){
      let gettingId = userCreate.id
      let jwtokenGen = jwt.sign({gettingId},JWT_SECRET)
      console.log(jwtokenGen)
      res.cookie("token",jwtokenGen,{
        httpOnly:true,
        secure:false,
        sameSite:"lax",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      res.redirect(`http://localhost:3000/Auth`)
      return
    }


  }

  catch(error){
    return res.json({msg:"Something went wrong while creating the user " + error})
  }
  
  
})

export default router