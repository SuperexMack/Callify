import { HeroVideoDialog } from "../../components/ui/hero-video-dialog"

export function HeroVideoDialogDemo() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/Qns0KSt-MVA?si=wFH29RBcz0h0uBWR"
        thumbnailSrc="/landing.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/Qns0KSt-MVA?si=wFH29RBcz0h0uBWR"
        thumbnailSrc="/landing.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  )
}
