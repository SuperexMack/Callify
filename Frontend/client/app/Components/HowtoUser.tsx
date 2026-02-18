import { HeroVideoDialogDemo } from "./VideDemo";

export function Howtouse(){
    return(
        <>
        <div className="w-[60%] h-auto flex flex-col space-y-6 mt-[9rem]">
            <h1 className="maintext text-[50px] text-center">How to use?</h1>
            <div className="w-full h-auto flex items-center justify-center mt-[3rem]">
                <HeroVideoDialogDemo></HeroVideoDialogDemo>
            </div>
        </div>
        </>
    )
}