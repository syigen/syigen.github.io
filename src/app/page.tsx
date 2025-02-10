import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { AboutSection } from "@/components/AboutSection"
import { SyigenSection } from "@/components/SyigenSection"
import { CallToActionSection } from "@/components/CallToActionSection"
import { SuccessSection } from "@/components/SuccessSection"
import { CeylonSection } from "@/components/CeylonSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      <Header />
      <main className="flex-grow pt-16 md:pt-20">
        <HeroSection />
        <AboutSection />
        <SyigenSection />
        <CallToActionSection />
        <SuccessSection />
        <CeylonSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

