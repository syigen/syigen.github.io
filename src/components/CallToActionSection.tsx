import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeInSection } from "@/components/FadeInSection"

export function CallToActionSection() {
  return (
    <section className="min-h-screen flex items-center bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark">
      <FadeInSection>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Don't Fall Behind in the AI Revolution</h2>
          <p className="text-lg mb-8">
            Without proper AI implementation, businesses risk losing competitive advantage, missing operational
            efficiencies, and wasting resources on disconnected solutions.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link href="#consultation">Book a Consultation</Link>
          </Button>
        </div>
      </FadeInSection>
    </section>
  )
}

