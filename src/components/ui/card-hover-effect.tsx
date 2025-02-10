"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type React from "react" // Added import for React

export const CardHoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string
    description: string
    icon?: React.ReactNode
  }[]
  className?: string
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 py-10", className)}>
      {items.map((item, idx) => (
        <div
          key={item.title}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <motion.div
            className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition duration-500 group-hover:duration-200"
            animate={hoveredIndex === idx ? { scale: 1 } : { scale: 0.95 }}
          />
          <motion.div
            className="relative bg-background-light dark:bg-background-dark rounded-2xl p-6 h-full"
            animate={hoveredIndex === idx ? { scale: 1.05 } : { scale: 1 }}
          >
            <div className="flex items-center justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold text-center mb-2">{item.title}</h3>
            <p className="text-sm text-center text-text-light dark:text-text-dark">{item.description}</p>
          </motion.div>
        </div>
      ))}
    </div>
  )
}

