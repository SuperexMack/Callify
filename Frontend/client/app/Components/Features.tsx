import { AnimatedTestimonialsDemo } from "./FeaturesContent";

export function Features(){
    return(
        <>
        <div className="md:w-[60%] w-full mt-[4rem] md:mt-[9rem] flex flex-col md:space-y-0 space-y-5">
  
          <div>
            <h1 className="text-orange-400 text-[20px] font-bold md:text-start md:ml-10 text-center">Features</h1>
          </div>

          <div className="md:flex md:flex-row flex-col md:space-y-0 space-y-5 justify-between">

            <div className="md:w-[45%] w-full">
                 <h1 className="md:text-[30px] text-[15px] text-center font-bold maintext">Everything for a great call.You don't need Anything else</h1>
            </div> 

             <div className="md:w-[45%] w-full">
                 <p className="md:text-[18px] text-[15px] text-center font-medium text-slate-500">
                    Built lean and focused. We didn't add meeting rooms, 
                    scheduling, or whiteboards we just made one-on-one 
                    calling really, really good.
                 </p>
            </div>  

          </div>

          <div className="w-full h-auto p-2">
            <AnimatedTestimonialsDemo></AnimatedTestimonialsDemo>
          </div>

        </div>
        </>
    )
}