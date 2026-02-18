import "../globals.css"

export function TopPagecontent(){
    return(
        <>
        <div className="w-[60%]  h-auto p-2 flex flex-col items-center space-y-4">
           <h1 className="text-[70px] font-bold text-black maintext text-center">Video calls that just</h1>
           <h1 className="text-[70px] font-bold text-orange-500 maintext text-center">Works.</h1>

           <div className="w-[70%]">
            <p className="text-[18px] font-light text-center text-slate-600">
            One link. No installs. No accounts for guests. Instant peer-to-peer 
            video calls powered by WebRTC private, fast, and free to start.
            Create rooms and start instantly
           </p>
           </div>

           <div className="flex items-center justify-center space-x-7 mt-[50px]">
               <button className="text-white font-bold rounded-lg bg-orange-500 p-2">Start a free call</button>
               <button className="text-slate-500 hover:text-black font-bold  p-2">See how it works</button>
           </div>

           <div className="p-2 w-[70%] h-[500px] mt-3 flex items-center justify-center">
             <video muted autoPlay={true} loop src={"/videostream.mp4"}></video>
           </div>

        </div>
        </>
    )
}