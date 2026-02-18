export function BottomContainer(){
    return(
        <>
        <div className="w-full p-5 mt-[10rem] bg-slate-50 border border-t-slate-300 border-b-slate-300 flex flex-col items-center justify-center">

            <div className="w-[40%] flex flex-col items-center mt-[30px]">
            <h1 className="text-[40px] maintext text-center">Make your first call in seconds.</h1>
            </div>

           <div className="flex items-center justify-center space-x-7 mt-[50px]">
               <button className="text-white font-bold rounded-lg bg-orange-500 p-2">Start a free call</button>
               <button className="text-slate-500 hover:text-black font-bold  p-2">See how it works</button>
           </div>

        </div>
        </>
    )
}