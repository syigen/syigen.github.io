"use client"

import {useRef} from "react"
import {motion, useInView} from "framer-motion"
import type React from "react"

export function FadeInSection({children}: { children: React.ReactNode }) {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

    return (
        <motion.div
            className={"w-full"}
            ref={ref}
            initial={{opacity: 0, y: 50}}
            animate={{opacity: isInView ? 1 : 0, y: isInView ? 0 : 50}}
            transition={{duration: 0.5}}
        >
            {children}
        </motion.div>
    )
}

