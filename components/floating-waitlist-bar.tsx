"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function FloatingWaitlistBar() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Show bar after scrolling 300px but hide when near top (< 100px) or near bottom (within 200px)
      const nearTop = scrollPosition < 100
      const nearBottom = scrollPosition + windowHeight > documentHeight - 200
      
      if (!isDismissed && !nearTop && !nearBottom && scrollPosition > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener("scroll", handleScroll)
  }, [isDismissed])

  const handleJoinWaitlist = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSf1r7JL9dmo9fV7rFQqoSfGawHjDK6wXT2DqCuaEtScm14XVA/viewform?usp=publish-editor",
      "_blank"
    )
  }

  const handleDismiss = () => {
    setIsDismissed(true)
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl"
        >
          <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-2xl shadow-2xl shadow-purple-500/30 border border-purple-400/30 backdrop-blur-xl">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer rounded-2xl" />
            
            <div className="relative flex items-center justify-between gap-4 px-6 py-4 md:px-8 md:py-5">
              {/* Left content */}
              <div className="flex items-center gap-3 flex-1">
                <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-sm md:text-base mb-0.5">
                    Join the Waitlist Today! 🚀
                  </h3>
                  <p className="text-white/80 text-xs md:text-sm">
                    Limited spots available • Early access benefits
                  </p>
                </div>
              </div>

              {/* Right buttons */}
              <div className="flex items-center gap-3">
                <Button
                  onClick={handleJoinWaitlist}
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-white/90 font-bold px-6 py-2 md:px-8 md:py-3 text-sm md:text-base rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  Join Now
                </Button>
                <button
                  onClick={handleDismiss}
                  className="text-white/60 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                  aria-label="Dismiss"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
