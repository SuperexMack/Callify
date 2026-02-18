"use client"
import random from "random-string-generator"
import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { Video  , Keyboard} from "lucide-react"
import { Features } from "../Components/Features"
import { ToastContainer, toast } from 'react-toastify';



export default function() {

    const [roomName,setRoomName] = useState("")
    const socket = useRef<WebSocket|null>(null)

    const router = useRouter()

    

    useEffect(()=>{

    socket.current = new WebSocket("ws://localhost:9000")

    if(socket.current){
        socket.current.onopen = ()=>{
          toast.success("Room is opened")
        }
    }

    if(socket.current){
        socket.current.onmessage = (event)=>{
          console.log("Inside")
          let message = JSON.parse(event.data)
          let userMessage = message.msg
          if(userMessage === "SENDER"){
            let roomId = message.roomId
            setTimeout(()=>router.push(`/Sender/${roomId}`),2000)
          }
          else if(userMessage === "REMOTE"){
            let roomId = message.roomId
            setTimeout(()=>router.push(`/Receiver/${roomId}`),2000)
          }
        }
    }

    },[])

   
    const CreateRoom = ()=>{
        let string = random(12,'lower')
        socket.current?.send(JSON.stringify({msg:"SENDER",roomId:string}))
    }

    const JoinRoom = ()=>{
        socket.current?.send(JSON.stringify({msg:"REMOTE",roomId:roomName}))
        console.log(roomName)
    }




 return(
  <>
    <div className="w-full h-auto flex flex-col items-center justify-center">
       
       <div className="md:w-[50%] w-full flex flex-col mt-[9rem] items-center space-y-9 ">

        <div className="w-full p-2">
            <h1 className="md:text-[40px] text-[35px] maintext text-center">Video calls and meetings for everyone</h1>
        </div>

        <div className="md:w-[60%] w-full">
            <p className="text-[20px] text-center">Connect to each other to share thoughts and memories or for creatng future</p>
        </div>
        
        <div className="md:flex md:flex-row flex-col md:space-y-0 space-y-4 items-center justify-center space-x-4">
           <div className="flex space-x-2 p-2 border-2 border-white bg-blue-600 rounded-2xl items-center justify-center">
                <Video className="text-white"></Video>
                <button onClick={CreateRoom} className="text-white">New Meeting</button>
           </div>
            <div  className="flex space-x-2 p-2 focus-within:ring-2 focus-within:border-blue-600 border border-black rounded-lg items-center justify-center">
                <Keyboard className="text-black"></Keyboard>
                <input onChange={(e)=>setRoomName(e.target.value)} className="focus:outline-none focus:ring-0" placeholder="Join Instant Meeting"></input>
           </div>
            
           <div className="flex items-center justify-center">
            <button onClick={JoinRoom} className="hover:cursor-pointer">Join</button>
           </div>

        </div>

         
       </div>
       
       <Features></Features>

       <ToastContainer></ToastContainer>

    </div>
  </>
 )
}