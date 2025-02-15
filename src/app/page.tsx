"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Github, Mail, MapPin, NetworkIcon, Menu, X } from "lucide-react"
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion"
import React, { useEffect, useState } from "react"
import { ThemeToggle } from "@/components/ThemeToggle"

export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const count40 = useMotionValue(0)
    const count60 = useMotionValue(0)
    const rounded40 = useTransform(count40, Math.round)
    const rounded60 = useTransform(count60, Math.round)
    const ref = React.useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
        if (isInView) {
            animate(count40, 40, { duration: 2 })
            animate(count60, 60, { duration: 2 })
        }
    }, [isInView, count40, count60])

    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 items-center justify-between mx-auto px-4">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image src="/img/logo/black_logo.png" alt="SYIGEN Logo" width={100} height={100} />
                    </Link>
                    <nav className="hidden md:flex items-center space-x-6">
                        <Link href="#about" className="text-sm font-medium hover:text-primary">
                            About
                        </Link>
                        <Link href="#ceylon" className="text-sm font-medium hover:text-primary">
                            Ceylon
                        </Link>
                        <Link href="#contact" className="text-sm font-medium hover:text-primary">
                            Contact
                        </Link>
                        <ThemeToggle />
                    </nav>
                    <Button variant="ghost" className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
                        <Menu className="h-6 w-6" />
                    </Button>
                </div>
            </header>

            {mobileMenuOpen && (
                <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden">
                    <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-background p-6 shadow-lg">
                        <Button variant="ghost" className="absolute right-4 top-4" onClick={() => setMobileMenuOpen(false)}>
                            <X className="h-6 w-6" />
                        </Button>
                        <nav className="mt-8 flex flex-col space-y-4">
                            <Link
                                href="#about"
                                className="text-lg font-medium hover:text-primary"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                href="#ceylon"
                                className="text-lg font-medium hover:text-primary"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Ceylon
                            </Link>
                            <Link
                                href="#contact"
                                className="text-lg font-medium hover:text-primary"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Contact
                            </Link>
                            <ThemeToggle />
                        </nav>
                    </div>
                </div>
            )}

            <main className="flex-1">
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="py-12 px-4 md:py-24 md:px-6 lg:py-32 lg:px-8"
                >
                    <div className="container mx-auto text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
                        >
                            Where AI Innovation Meets Enterprise Solutions
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="mt-4 text-lg md:text-xl text-muted-foreground"
                        >
                            Harness the true potential of AI for your enterprise with SYIGEN
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
                        >
                            <Button
                                size="lg"
                                className="w-full sm:w-auto"
                                onClick={() => {
                                    window.location.href = "https://cal.com/syigen/15min"
                                }}
                            >
                                Schedule a Demo
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="w-full sm:w-auto"
                                onClick={() => {
                                    window.location.href = "https://ceylon.ai"
                                }}
                            >
                                Go to Ceylon
                                <NetworkIcon className="ml-2 h-4 w-4" />
                            </Button>
                        </motion.div>
                    </div>
                </motion.section>

                <section className="py-16 px-4 md:px-6 lg:py-24 w-full bg-muted">
                    <div className="container mx-auto max-w-7xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold text-center mb-12"
                        >
                            The Challenge Enterprises Face
                        </motion.h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    title: "Manual Tasks Overload",
                                    description: "Your teams spend too much time on tasks that could be automated",
                                },
                                {
                                    title: "Disconnected Systems",
                                    description: "Your systems don't talk to each other effectively",
                                },
                                {
                                    title: "Underutilized Data",
                                    description: "Your data isn't working as hard as it could be",
                                },
                                {
                                    title: "Competitive Disadvantage",
                                    description: "Your competitors might be pulling ahead",
                                },
                            ].map((challenge, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>{challenge.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <CardDescription>{challenge.description}</CardDescription>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="ceylon" className="py-16 px-4 md:px-6 lg:py-24 lg:px-8">
                    <div className="container mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold text-center mb-12"
                        >
                            Introducing Ceylon
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center text-xl mb-8"
                        >
                            Ceylon is an open-source Multi-Agent System that makes AI implementation simple:
                        </motion.p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "Easy Integration", description: "Connect your existing systems seamlessly" },
                                { title: "Workflow Automation", description: "Automate complex workflows with ease" },
                                { title: "Scalable Solution", description: "Scale as you grow without limitations" },
                                { title: "Secure & Compliant", description: "Stay secure and compliant at all times" },
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col items-center text-center"
                                >
                                    <CheckCircle className="h-12 w-12 text-primary mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16 px-4 md:px-6 lg:py-24 w-full bg-muted">
                    <div className="container mx-auto max-w-7xl">
                        <h2 className="text-3xl font-bold text-center mb-12">SYIGEN: Your AI Implementation Guide</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {[
                                { title: "Assess", description: "We assess your current systems and AI readiness" },
                                {
                                    title: "Implement",
                                    description: "We implement Ceylon, our open-source Multi-Agent System",
                                },
                                { title: "Support", description: "We provide ongoing support and optimization" },
                            ].map((step, index) => (
                                <Card key={index}>
                                    <CardHeader>
                                        <CardTitle className="text-2xl">{step.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>{step.description}</CardDescription>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16 px-4 md:px-6 lg:py-24 lg:px-8">
                    <div className="container mx-auto text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold mb-8"
                        >
                            Success with SYIGEN
                        </motion.h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <motion.p className="text-4xl font-bold text-primary">
                                    <motion.span>{rounded40}</motion.span>%
                                </motion.p>
                                <p className="mt-2">Reduction in operational costs</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <motion.p className="text-4xl font-bold text-primary">
                                    <motion.span>{rounded60}</motion.span>%
                                </motion.p>
                                <p className="mt-2">Faster process automation</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <p className="text-4xl font-bold text-primary">Seamless</p>
                                <p className="mt-2">Integration of AI capabilities</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section id="contact" className="py-12 px-4 md:py-16 md:px-6 lg:py-24 lg:px-8 bg-muted">
                    <div className="container mx-auto max-w-7xl text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Transform Your Enterprise with SYIGEN</h2>
                        <div className="flex flex-col items-center gap-4">
                            <div className="flex items-center">
                                <Mail className="h-5 w-5 mr-2" />
                                <span className="text-sm md:text-base">contact@syigen.com</span>
                            </div>
                            <div className="flex items-center">
                                <MapPin className="h-5 w-5 mr-2" />
                                <span className="text-sm md:text-base">[Your Location]</span>
                            </div>
                            <div className="flex items-center">
                                <Github className="h-5 w-5 mr-2" />
                                <Link href="https://github.com/syigen/ceylon" className="underline text-sm md:text-base">
                                    github.com/syigen/ceylon
                                </Link>
                            </div>
                        </div>
                        <Button size="lg" className="mt-6 md:mt-8 w-full sm:w-auto">
                            Get in Touch
                        </Button>
                    </div>
                </section>
            </main>

            <footer className="py-6 px-4 md:px-6 border-t">
                <div className="container mx-auto text-center text-sm text-muted-foreground">
                    © 2025 SYIGEN. All rights reserved.
                </div>
            </footer>
        </>
    )
}

