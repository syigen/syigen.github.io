import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeInSection } from "@/components/FadeInSection"

export function SuccessSection() {
  return (
    <section className="min-h-screen flex items-center">
      <FadeInSection>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Success with SYIGEN</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>40%</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Reduction in operational costs</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>60%</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Faster process automation</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Seamless</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Integration of AI capabilities</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </FadeInSection>
    </section>
  )
}

