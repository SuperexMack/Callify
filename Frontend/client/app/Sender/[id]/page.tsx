"use client"
import { useEffect, useRef, useState } from "react"
import { useParams } from "next/navigation"
import {Phone, PhoneOff} from "lucide-react"
import { useRouter } from "next/navigation"
import { ToastContainer, toast } from 'react-toastify';



export default function(){

    const router = useRouter()


    const socket = useRef<WebSocket|null>(null)
    const RemotevideoRef = useRef<HTMLVideoElement>(null)
    const LocalvideoRef = useRef<HTMLVideoElement>(null)
    const [myRoomid,setMyroomid] = useState("")
    const {id} = useParams<{id:string}>()
    const pc = useRef<RTCPeerConnection | null>(null)

    

    useEffect(()=>{
      
      socket.current = new WebSocket("ws://localhost:9000")
      
      socket.current.onopen = (()=>{
        socket.current?.send(JSON.stringify({
            msg:"SENDER",
            roomId:id
        }))
      })

      socket.current.onmessage = async(event)=>{
        let myallmesssage = JSON.parse(event.data)
        if(myallmesssage.Majorinfo === "UserArrived"){
          toast.success("User Arrived now start the call")
        }
        if(myallmesssage.msg === "create-offer" || myallmesssage.msg === "create-answer")console.log(myallmesssage.roomMsg)
        if(myallmesssage.msg === "create-answer"){
            await pc.current?.setRemoteDescription(myallmesssage.sdp)
        }
        if(myallmesssage.msg === "ice-candidate"){
            await pc.current?.addIceCandidate(myallmesssage.candidate)
        }
      }

    },[])

    const sendMessageOtheSide = async()=>{
        pc.current = new RTCPeerConnection()

         pc.current.ontrack = (event)=>{
          console.log("Video found")
            console.log("We are getting the video")
            RemotevideoRef.current!.srcObject = event.streams[0]
        }

        pc.current.onicecandidate = (event)=>{
         if(event?.candidate){
            socket.current?.send(JSON.stringify({msg:"ice-candidate",candidate:event.candidate,roomId:id}))
         }
       }

      const stream = await navigator.mediaDevices.getUserMedia({audio:true,video:true})

      LocalvideoRef.current!.srcObject = stream

      stream.getTracks().forEach((track:any)=>pc.current?.addTrack(track,stream))

      alert("Video sended")
       

        
      let createOffer = await pc.current?.createOffer()
      await pc.current?.setLocalDescription(createOffer)
      socket.current?.send(JSON.stringify({msg:"create-offer",sdp:createOffer,roomId:id}))

    }


    const cutcall = ()=>{
       window.location.href = "/roomsection"
    }



    return(
        <>
        {/* <div className="w-full bg-amber-700 justify-center h-auto p-3 flex">
        <h1 className="mt-7 items-center text-[30px] font-bold">Sender's side</h1>
        </div>
        <div className="flex  w-full h-screen items-center justify-center flex-col space-y-8">
        <button className="text-white border-2 p-2 border-white rounded-lg font-bold text-[30px]" onClick={sendMessageOtheSide}>Send Video</button>
        <div className="w-[500px] h-[500px] object-contain">
          <video
            ref={LocalvideoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-full loc"
          ></video>

          <video
            ref={RemotevideoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-full rem"
          ></video>
        </div>
        </div> */}

        <div className="mt-[9rem] w-full h-auto p-2 md:flex md:flex-row flex-col md:space-y-0 space-y-5 justify-between">
            
            <div className="md:w-[45%] w-full md:h-[500px] h-[300px] object-cover border-2 border-slate-200 rounded-2xl">

            <video ref={LocalvideoRef} autoPlay playsInline muted className="w-full h-full loc"></video>

            </div>

            <div className="md:w-[45%] w-full md:h-[500px] h-[300px] object-cover border-2 border-slate-200 rounded-2xl">

            <video ref={RemotevideoRef} autoPlay playsInline muted className="w-full h-full rem"></video>

            </div>

        </div>

        <div className="md:flex md:flex-row md:space-y-0 flex-col space-y-4 w-full space-x-7 h-auto p-2 items-center justify-center">
            <div onClick={sendMessageOtheSide} className="flex space-x-5 items-center justify-center md:w-auto w-full p-3 rounded-2xl bg-green-500 hover:cursor-pointer">
                 <div><Phone className="text-white"></Phone></div>
                 <div>
                    <h1 className="text-white font-bold text-center">Start Video call</h1>
                 </div>
            </div>
             <div onClick={cutcall} className="flex space-x-5 items-center justify-center md:w-auto w-full p-3 rounded-2xl bg-red-500 hover:cursor-pointer">
                 <div><PhoneOff className="text-white"></PhoneOff></div>
                 <div>
                    <h1 className="text-white font-bold text-center">Cut Call</h1>
                 </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>


        </>
    )
}