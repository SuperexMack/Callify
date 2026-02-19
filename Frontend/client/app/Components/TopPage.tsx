import "../globals.css"
import Link from "next/link"

export function TopPagecontent(){
    return(
        <>
        <div className="md:w-[60%] w-full  h-auto p-2 flex flex-col items-center space-y-4">
           <h1 className="md:text-[70px] text-[34px] font-bold text-black maintext text-center">Video calls that just</h1>
           <h1 className="md:text-[70px] text-[40px] font-bold text-orange-500 maintext text-center">Works.</h1>

           <div className="md:w-[70%] w-full">
            <p className="md:text-[18px] text-[15px] font-light text-center text-slate-600">
            One link. No installs. No accounts for guests. Instant peer-to-peer 
            video calls powered by WebRTC private, fast, and free to start.
            Create rooms and start instantly
           </p>
           </div>

           <div className="md:flex md:flex-row md:space-y-0 flex-col space-y-6  items-center justify-center space-x-7 mt-[50px]">
               <Link href={"/roomsection"}><button className="text-white w-full bg-amber-600 font-bold rounded-lg  p-3">Start a free call</button></Link>
               <Link href={"https://github.com/SuperexMack/Callify"}><button className="text-slate-500 md:w-auto hover:cursor-pointer w-full hover:text-black font-bold mt-5 md:mt-0 p-2">Contribute to it</button></Link>
           </div>

           <div className="p-2 md:w-[70%] w-full md:h-[500px] h-[200px] md:mt-3 flex items-center justify-center">
             <video muted autoPlay={true} loop src={"/videostream.mp4"}></video>
           </div>

        </div>
        </>
    )
}