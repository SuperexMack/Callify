export function BottomContainer(){
    return(
        <>
        <div className="w-full p-5 mt-[6rem] md:mt-[10rem] bg-slate-50 border border-t-slate-300 border-b-slate-300 flex flex-col items-center justify-center">

            <div className="md:w-[40%] w-full flex flex-col items-center mt-[30px]">
            <h1 className="md:text-[40px] text-[25px] maintext text-center">Make your first call in seconds.</h1>
            </div>

           <div className="md:flex md:flex-row flex-col md:space-y-0  space-y-9 items-center justify-center space-x-7 mt-[50px]">
               <button className="text-white w-full font-bold rounded-lg bg-orange-500 p-2">Start a free call</button>
               <button className="text-slate-500 w-[20rem]  hover:text-black font-bold  p-2">See how it works</button>
           </div>

        </div>
        </>
    )
}