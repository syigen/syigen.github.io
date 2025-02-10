import Link from "next/link"
import {Button} from "@/components/ui/button"
import {FadeInSection} from "@/components/FadeInSection"
import {BackgroundBeams} from "@/components/ui/background-beams";

export function HeroSection() {
    return (
        <section className="min-h-screen flex items-center bg-surface-light dark:bg-surface-dark">
            <FadeInSection>
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
                        Where AI Innovation Meets Enterprise Solutions
                    </h1>
                    <p className="text-lg md:text-xl text-center text-text-light dark:text-text-dark mb-8">
                        Harness the true potential of AI for your enterprise with SYIGEN
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <Button asChild className="w-full sm:w-auto">
                            <Link href="#demo">Schedule a Demo</Link>
                        </Button>
                        <Button variant="outline" asChild className="w-full sm:w-auto">
                            <Link href="#download">Download Ceylon</Link>
                        </Button>
                    </div>
                </div>
                <BackgroundBeams />
            </FadeInSection>
        </section>
    )
}

