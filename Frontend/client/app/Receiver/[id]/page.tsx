"use client"

import { useEffect, useRef, useState } from "react"
import { useParams } from "next/navigation"
import { Phone, PhoneOff } from "lucide-react"
import { useRouter } from "next/navigation"

export default function(){

    const router = useRouter()

    const socket = useRef<WebSocket|null>(null)
    const localVideoRef = useRef<HTMLVideoElement>(null)
    const remoteVideoRef = useRef<HTMLVideoElement>(null)
    const [myRoomid,setMyroomid] = useState("")
    const {id} = useParams<{id:string}>()
    const pc = useRef<RTCPeerConnection|null>(null)

    
    useEffect(()=>{
      
        
          socket.current = new WebSocket("wss://callify-lkp7.onrender.com/")
          socket.current.onopen = (()=>{
            socket.current?.send(JSON.stringify({
                msg:"REMOTE",
                roomId:id
            }))
        })

        pc.current = new RTCPeerConnection({
          iceServers:[
            {urls:"stun:stun.l.google.com:19302" }
          ]
        })

      
        console.log("Video found")
          pc.current.ontrack = (event)=>{
          remoteVideoRef.current!.srcObject = event.streams[0]
        }


        pc.current.onicecandidate = (event)=>{
        if(event.candidate){
          socket.current?.send(JSON.stringify({msg:"ice-candidate",candidate:event.candidate,roomId:id}))
        }
      }

      const caller = async()=>{
      let stream = await navigator.mediaDevices.getUserMedia({audio:true,video:true})
      localVideoRef.current!.srcObject = stream
      stream.getTracks().forEach(track => pc.current?.addTrack(track, stream))
    }
    caller()

        
        socket.current.onmessage = async(alldata)=>{
            let allmessage = JSON.parse(alldata.data)
            console.log("Prove is "+ allmessage.roomMsg)
            if(allmessage.msg === "create-offer"){
                await pc.current?.setRemoteDescription(allmessage.sdp)
                const answer = await pc.current?.createAnswer()
                await pc.current?.setLocalDescription(answer)
                socket.current?.send(JSON.stringify({msg:"create-answer",sdp:answer,roomId:id}))
            }
            else if(allmessage.msg === "ice-candidate"){
                await pc.current?.addIceCandidate(allmessage.candidate)
            }
        }


    },[])

     const cutcall = ()=>{
        window.location.href = "/roomsection"
    }


    return(
        <>
        {/* <div className="flex  flex-col space-y-5 items-center justify-center">
        <h1 className="mt-7 text-[30px] font-bold">Receiver's side</h1>
        <div className="w-[500px] h-[500px] object-contain">
          <video
            ref={localVideoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-full loc"
          ></video>

          <video
            ref={remoteVideoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-full rem"
          ></video>
        </div>
        </div> */}

         <div className="mt-[9rem] w-full h-auto p-2 md:flex md:flex-row flex-col md:space-y-0 space-y-5 justify-between">
            
            <div className="md:w-[45%] w-full md:h-[500px] h-[300px] object-cover border-2 border-slate-200 rounded-2xl">

            <video ref={localVideoRef} autoPlay playsInline muted className="w-full h-full loc"></video>

            </div>

            <div className="md:w-[45%] w-full md:h-[500px] h-[300px] object-cover border-2 border-slate-200 rounded-2xl">

            <video ref={remoteVideoRef} autoPlay playsInline muted className="w-full h-full rem"></video>

            </div>

        </div>

        <div className="flex w-full h-auto p-2 items-center justify-center">
            <div onClick={cutcall} className="flex space-x-5 p-3 md:w-auto w-full items-center justify-center rounded-2xl bg-red-500 hover:cursor-pointer">
                 <div><PhoneOff className="text-white"></PhoneOff></div>
                 <div>
                    <h1 className="text-white font-bold">Cut Call</h1>
                 </div>
            </div>
        </div>

        </>
    )
}