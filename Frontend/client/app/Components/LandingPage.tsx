import { BottomContainer } from "./BottomContainer";
import { Features } from "./Features";
import { Howtouse } from "./HowtoUser";
import { TopPagecontent } from "./TopPage";

export function LandingPage(){
    return(
        <>
        <div className="w-full mt-[9rem] h-auto p-2 flex  flex-col items-center space-y-4">
           <TopPagecontent></TopPagecontent>
           <Features></Features>
           <Howtouse></Howtouse>
           <BottomContainer></BottomContainer>
        </div>
        </>
    )
}