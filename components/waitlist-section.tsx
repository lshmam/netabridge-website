"use client"

import { Button } from "@/components/ui/button"
import { BlurReveal } from "@/components/BlurReveal"
import { BorderBeam } from "@/components/ui/border-beam"
import { ParticlesBackground } from "@/components/ui/particles-background"
import { Users, ArrowRight } from "lucide-react"
import Glow from "@/components/ui/glow"

export function WaitlistSection() {
  const handleJoinWaitlist = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSf1r7JL9dmo9fV7rFQqoSfGawHjDK6wXT2DqCuaEtScm14XVA/viewform?usp=publish-editor",
      "_blank"
    )
  }

  return (
    <section className="py-2 px-2 md:py-4 md:px-4" data-section="waitlist">
      <div className="relative bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] rounded-[2rem] md:rounded-[3rem] py-16 md:py-28 px-4 md:px-12 overflow-hidden border border-white/10 w-full">
        {/* Glow Effect */}
        <Glow variant="below" className="bottom-0" />

        {/* Network Animation Background */}
        <div className="absolute inset-0 opacity-40">
          <ParticlesBackground id="tsparticles-waitlist" />
        </div>

        {/* Subtle dot pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] [background-size:40px_40px]" />

        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Badge */}
          <BlurReveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-purple-200 text-sm mb-8">
              <Users className="w-4 h-4" />
              <span>Limited Early Access</span>
            </div>
          </BlurReveal>

          <BlurReveal delay={0.2}>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-balance">
              <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                Ready to Transform Your Network?
              </span>
            </h2>
          </BlurReveal>

          <BlurReveal delay={0.3}>
            <p className="text-xl md:text-2xl text-white/70 mb-6 text-pretty leading-relaxed max-w-3xl mx-auto font-light">
              Join thousands of supply chain professionals already on the waitlist.
            </p>
          </BlurReveal>

          <BlurReveal delay={0.35}>
            <p className="text-base md:text-lg text-white/50 mb-12 text-pretty leading-relaxed max-w-2xl mx-auto">
              Be first to access exclusive features, priority onboarding, and special launch pricing. 
              No credit card required.
            </p>
          </BlurReveal>

          <BlurReveal delay={0.4}>
            {/* Wrapper for BorderBeam effect */}
            <div className="relative overflow-hidden rounded-full inline-block">
              <Button 
                size="lg" 
                onClick={handleJoinWaitlist}
                className="relative rounded-full px-14 py-8 text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-500 hover:to-blue-500 transition-all duration-300 hover:scale-105 shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 group"
              >
                Secure Your Spot Now
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
              <BorderBeam size={300} duration={5} className="from-purple-500 via-blue-500 to-purple-500" />
            </div>
          </BlurReveal>

          <BlurReveal delay={0.5}>
            <div className="flex items-center justify-center gap-6 mt-10 text-sm text-white/40">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>1,247 joined this week</span>
              </div>
              <span className="text-white/20">•</span>
              <span>🔒 Your data is secure</span>
            </div>
          </BlurReveal>
        </div>
      </div>
    </section>
  )
}
