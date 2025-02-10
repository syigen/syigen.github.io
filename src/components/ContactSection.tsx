import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeInSection } from "@/components/FadeInSection"

export function ContactSection() {
  return (
    <section id="contact" className="min-h-screen flex items-center">
      <FadeInSection>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Transform Your Enterprise with SYIGEN</h2>
          <p className="text-base md:text-lg mb-4">Email: contact@syigen.com</p>
          <p className="text-base md:text-lg mb-4">Location: [Your Location]</p>
          <p className="text-base md:text-lg mb-8">
            GitHub:{" "}
            <a
              href="https://github.com/syigen/ceylon"
              className="text-primary-light dark:text-primary-dark hover:underline"
            >
              github.com/syigen/ceylon
            </a>
          </p>
          <Button size="lg" asChild className="w-full sm:w-auto">
            <Link href="#contact-form">Get in Touch</Link>
          </Button>
        </div>
      </FadeInSection>
    </section>
  )
}

