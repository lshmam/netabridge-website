"use client"

import { motion } from "motion/react"
import { cn } from "@/lib/utils"

interface AnimatedBorderProps {
    duration?: number
    glowColor?: string
    borderWidth?: number
    className?: string
}

export function AnimatedBorder({
    duration = 3,
    glowColor = "#8b5cf6",
    borderWidth = 2,
    className,
}: AnimatedBorderProps) {
    return (
        <>
            {/* The rotating gradient border */}
            <motion.div
                className={cn(
                    "pointer-events-none absolute rounded-[inherit]",
                    className
                )}
                style={{
                    inset: `-${borderWidth}px`,
                    padding: `${borderWidth}px`,
                    background: `conic-gradient(from 0deg, transparent 0deg, ${glowColor} 90deg, transparent 180deg, transparent 360deg)`,
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                }}
                animate={{
                    rotate: [0, 360],
                }}
                transition={{
                    duration: duration,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Static border underneath for better visibility */}
            <div
                className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-20"
                style={{
                    border: `${borderWidth}px solid ${glowColor}`,
                }}
            />
        </>
    )
}
