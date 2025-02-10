import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeInSection } from "@/components/FadeInSection"

export function SyigenSection() {
  return (
    <section className="min-h-screen flex items-center bg-surface-light dark:bg-surface-dark">
      <FadeInSection>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">SYIGEN: Your AI Implementation Guide</h2>
          <p className="text-base md:text-lg text-center text-text-light dark:text-text-dark mb-8">
            At SYIGEN, we understand the complexities of enterprise AI implementation. Our team of AI solution
            architects has successfully helped organizations transform their operations through intelligent automation.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Assess</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We assess your current systems and AI readiness</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Implement</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We implement Ceylon, our open-source Multi-Agent System</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We provide ongoing support and optimization</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </FadeInSection>
    </section>
  )
}

