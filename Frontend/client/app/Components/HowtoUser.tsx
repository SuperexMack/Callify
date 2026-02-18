import { HeroVideoDialogDemo } from "./VideDemo";

export function Howtouse(){
    return(
        <>
        <div className="md:w-[60%] w-full h-auto flex flex-col space-y-6 mt-[1rem] md:mt-[9rem]">
            <h1 className="maintext md:text-[50px] text-[40px] text-center">How to use?</h1>
            <div className="w-full h-auto flex items-center justify-center mt-[3rem]">
                <HeroVideoDialogDemo></HeroVideoDialogDemo>
            </div>
        </div>
        </>
    )
}