import { FadeInSection } from "@/components/FadeInSection"

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center">
      <FadeInSection>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">The Challenge Enterprises Face</h2>
          <p className="text-lg text-center text-text-light dark:text-text-dark mb-8">
            In today's fast-paced business environment, enterprises struggle to harness the true potential of AI.
            Complex workflows, disconnected systems, and the challenge of implementing effective AI solutions hold
            businesses back from achieving their digital transformation goals.
          </p>
        </div>
      </FadeInSection>
    </section>
  )
}

