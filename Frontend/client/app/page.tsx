import Image from "next/image";
import { LandingPage } from "./Components/LandingPage";

export default function Home() {
  return(
    <>
    <div className="flex w-full h-auto">
        <LandingPage></LandingPage>
    </div>
    </>
  )
}
