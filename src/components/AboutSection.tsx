import {TextGenerateEffect} from "@/components/ui/text-generate-effect"
import {TypewriterEffect} from "@/components/ui/typewriter-effect"
import {CardHoverEffect} from "@/components/ui/card-hover-effect"
import {FadeInSection} from "@/components/FadeInSection"
import {AlertCircle, Zap, BarChart, TrendingUp} from "lucide-react"

export function AboutSection() {
    const challengeItems = [
        {
            title: "Manual Tasks Overload",
            description: "Your teams spend too much time on tasks that could be automated",
            icon: <AlertCircle className="w-8 h-8 text-red-500"/>,
        },
        {
            title: "Disconnected Systems",
            description: "Your systems don't talk to each other effectively",
            icon: <Zap className="w-8 h-8 text-yellow-500"/>,
        },
        {
            title: "Underutilized Data",
            description: "Your data isn't working as hard as it could be",
            icon: <BarChart className="w-8 h-8 text-blue-500"/>,
        },
        {
            title: "Competitive Disadvantage",
            description: "Your competitors might be pulling ahead",
            icon: <TrendingUp className="w-8 h-8 text-green-500"/>,
        },
    ]

    const ceylonFeatures = [
        {
            title: "Easy Integration",
            description: "Connect your existing systems seamlessly",
            icon: <Zap className="w-8 h-8 text-purple-500"/>,
        },
        {
            title: "Workflow Automation",
            description: "Automate complex workflows with ease",
            icon: <BarChart className="w-8 h-8 text-indigo-500"/>,
        },
        {
            title: "Scalable Solution",
            description: "Scale as you grow without limitations",
            icon: <TrendingUp className="w-8 h-8 text-teal-500"/>,
        },
        {
            title: "Secure & Compliant",
            description: "Stay secure and compliant at all times",
            icon: <AlertCircle className="w-8 h-8 text-pink-500"/>,
        },
    ]

    return (
        <section id="about" className="min-h-screen flex items-center py-20">
            <FadeInSection>
                <div className="container mx-auto px-4">
                    <TextGenerateEffect
                        words="The Challenge Enterprises Face"
                        className="text-4xl md:text-5xl lg:text-6xl text-center mb-8"
                    />
                    <p className="text-lg text-center text-text-light dark:text-text-dark mb-12">
                        In today&apos;s fast-paced business environment, enterprises struggle to harness the true
                        potential of AI.
                        Complex workflows, disconnected systems, and ineffective AI implementation hold businesses back
                        from
                        achieving their digital transformation goals.
                    </p>

                    <h3 className="text-2xl font-semibold text-center mb-6">What This Means For You</h3>
                    <CardHoverEffect items={challengeItems} className="mb-16"/>

                    <h3 className="text-2xl font-semibold text-center mb-6">Introducing Ceylon</h3>
                    <p className="text-lg text-center text-text-light dark:text-text-dark mb-6">
                        Ceylon is an open-source Multi-Agent System that makes AI implementation simple:
                    </p>
                    <CardHoverEffect items={ceylonFeatures} className="mb-16"/>
                </div>
            </FadeInSection>
        </section>
    )
}

