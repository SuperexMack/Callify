import Link from "next/link"
export function BottomContainer(){
    return(
        <>
        <div className="w-full p-5 mt-[6rem] md:mt-[10rem] bg-slate-50 dark:bg-gray-800 border border-t-slate-300 dark:border-t-gray-600 border-b-slate-300 dark:border-b-gray-600 flex flex-col items-center justify-center">

            <div className="md:w-[40%] w-full flex flex-col items-center mt-[30px]">
            <h1 className="md:text-[40px] text-[25px] maintext text-center dark:text-white">Make your first call in seconds.</h1>
            </div>

           <div className="md:flex md:flex-row flex-col md:space-y-0  items-center justify-center space-x-7 mt-[50px]">
              <Link href={"/roomsection"} className="text-white w-full font-bold rounded-lg bg-orange-500 p-2 text-center">Start a free call</Link> 
              <Link href={"https://github.com/SuperexMack/Callify"} className="text-slate-500 w-full md:w-auto mt-5 md:mt-0 hover:text-black dark:hover:text-white font-bold  p-2 text-center">Contribute to it</Link> 
           </div>

        </div>
        </>
    )
}