import { AnimatedTestimonialsDemo } from "./FeaturesContent";

export function Features(){
    return(
        <>
        <div className="w-[60%] mt-[9rem] flex flex-col">
  
          <div>
            <h1 className="text-orange-400 font-bold">Features</h1>
          </div>

          <div className="flex justify-between">

            <div className="w-[45%]">
                 <h1 className="text-[30px] font-bold maintext">Everything for a great call.You don't need Anything else</h1>
            </div> 

             <div className="w-[45%]">
                 <p className="text-[18px] font-medium text-slate-500">
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