import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeInSection } from "@/components/FadeInSection"

export function CeylonSection() {
  return (
    <section id="ceylon" className="min-h-screen flex items-center bg-surface-light dark:bg-surface-dark">
      <FadeInSection>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">About Ceylon</h2>
          <p className="text-base md:text-lg text-center text-text-light dark:text-text-dark mb-8">
            Ceylon is our flagship open-source Multi-Agent System, designed to revolutionize how enterprises implement
            AI solutions.
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Intelligent Process Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Streamline your workflows with AI-powered automation</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Seamless System Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Connect your existing systems with our flexible architecture</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Scalable AI Deployment</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Grow your AI capabilities as your business expands</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Real-time Decision Making</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Empower your team with AI-driven insights</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </FadeInSection>
    </section>
  )
}

