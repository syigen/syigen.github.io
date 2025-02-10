"use client"

import {useEffect} from "react"
import {motion, stagger, useAnimate} from "framer-motion"
import {cn} from "@/lib/utils"

export const TextGenerateEffect = ({
                                       words,
                                       className,
                                   }: {
    words: string
    className?: string
}) => {
    const [scope, animate] = useAnimate()
    const wordsArray = words.split(" ")
    useEffect(() => {
        animate(
            "span",
            {
                opacity: 1,
            },
            {
                duration: 2,
                delay: stagger(0.2),
            },
        )
    }, [scope.current, animate]) // Added animate to dependencies

    return (
        <motion.div ref={scope} className={cn("font-bold", className)}>
            {wordsArray.map((word, idx) => {
                return (
                    <motion.span key={word + idx} className="opacity-0 inline-block">
                        {word}&nbsp;
                    </motion.span>
                )
            })}
        </motion.div>
    )
}

