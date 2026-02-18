"use client"
import { useRef } from "react";
import { BottomContainer } from "./BottomContainer";
import { Features } from "./Features";
import { Howtouse } from "./HowtoUser";
import Navbar from "./Navbar";
import { TopPagecontent } from "./TopPage";

export function LandingPage(){


    const feature = useRef<HTMLDivElement>(null)
    const works = useRef<HTMLDivElement>(null)
    const contact = useRef<HTMLDivElement>(null)

    return(
        <>
        <Navbar feature={feature} works={works} pricing={contact}></Navbar>
        <div className="w-full mt-[9rem] h-auto p-2 flex  flex-col items-center space-y-4">
           <TopPagecontent></TopPagecontent>
          <div className="flex w-full justify-center" ref={feature}><Features></Features></div>
          <div className="flex w-full justify-center" ref={works}><Howtouse></Howtouse></div>
          <div className="flex w-full justify-center" ref={contact}><BottomContainer></BottomContainer></div> 
        </div>
        </>
    )
}