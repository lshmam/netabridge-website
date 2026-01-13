"use client"

import { Button } from "@/components/ui/button"
import { Search, FileCode, MoreVertical, Command } from "lucide-react"
import { BlurReveal } from "@/components/BlurReveal"
import Image from "next/image"
import { Ripple } from "@/components/ui/ripple"
import { BentoGrid } from "@/components/bento-grid"

export function IntegrationsSection() {
  return (
    <section id="integrations" className="py-8 md:py-12 px-4 md:px-16 lg:px-32 xl:px-48">
      <div className="bg-background rounded-[2rem] md:rounded-[3rem] py-12 md:py-24 px-4 md:px-12">
        {/* Network Data Section */}
        <div className="mx-auto max-w-6xl mb-20 md:mb-32">
          <div className="bg-muted/30 rounded-3xl p-6 md:p-12 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <div className="flex items-center gap-2 text-muted-foreground mb-6">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>+</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>+</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>

                <BlurReveal delay={0.1}>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-balance">
                    Bring your network data anywhere
                  </h2>
                </BlurReveal>
                <BlurReveal delay={0.2}>
                  <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
                    Advanced identity resolution automatically merges contacts across email, LinkedIn, X, and more. Our API
                    becomes the intelligence layer between your tools – no complex data science required.
                  </p>
                </BlurReveal>
                <div className="flex gap-4">
                  <Button className="rounded-lg">
                    <FileCode className="h-4 w-4 mr-2" />
                    API Docs
                  </Button>
                  <Button variant="outline" className="rounded-lg bg-transparent">
                    <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    Book a Call
                  </Button>
                </div>
              </div>

              {/* Integration Icons Network */}
              <div className="relative h-80">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Pulsing Waves */}
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    <Ripple mainCircleSize={150} numCircles={4} />
                  </div>

                  {/* Center Icon */}
                  <div className="absolute w-14 h-14 rounded-full bg-card border-2 shadow-lg flex items-center justify-center z-10 overflow-hidden p-2">
                    <Image src="/app-icons/hubspot.png" alt="HubSpot" width={32} height={32} className="object-contain" />
                  </div>

                  {/* Left Side Icons */}
                  <div className="absolute left-[20%] top-[20%] w-12 h-12 rounded-full bg-card border shadow-md flex items-center justify-center p-2.5 z-10 -translate-x-1/2 -translate-y-1/2">
                    <Image src="/app-icons/gmail.png" alt="Gmail" width={24} height={24} className="object-contain" />
                  </div>
                  <div className="absolute left-[10%] top-[50%] w-12 h-12 rounded-full bg-card border shadow-md flex items-center justify-center p-2.5 z-10 -translate-x-1/2 -translate-y-1/2">
                    <Image src="/app-icons/linkedin.png" alt="LinkedIn" width={24} height={24} className="object-contain" />
                  </div>
                  <div className="absolute left-[20%] bottom-[20%] w-12 h-12 rounded-full bg-card border shadow-md flex items-center justify-center p-2.5 z-10 -translate-x-1/2 translate-y-1/2">
                    <Image src="/app-icons/twitter.png" alt="Twitter" width={24} height={24} className="object-contain" />
                  </div>
                  <div className="absolute left-[40%] bottom-[5%] w-12 h-12 rounded-full bg-card border shadow-md flex items-center justify-center p-2.5 z-10 -translate-x-1/2 translate-y-1/2">
                    <Image src="/app-icons/whatsapp.png" alt="WhatsApp" width={24} height={24} className="object-contain" />
                  </div>

                  {/* Right Side Icons */}
                  <div className="absolute right-[20%] top-[20%] w-12 h-12 rounded-full bg-card border shadow-md flex items-center justify-center p-2.5 z-10 translate-x-1/2 -translate-y-1/2">
                    <Image src="/app-icons/apple.png" alt="Apple" width={24} height={24} className="object-contain" />
                  </div>
                  <div className="absolute right-[10%] top-[50%] w-12 h-12 rounded-full bg-card border shadow-md flex items-center justify-center p-2.5 z-10 translate-x-1/2 -translate-y-1/2">
                    <Image src="/app-icons/instagram (1).png" alt="Instagram" width={24} height={24} className="object-contain" />
                  </div>
                  <div className="absolute right-[20%] bottom-[20%] w-12 h-12 rounded-full bg-card border shadow-md flex items-center justify-center p-2.5 z-10 translate-x-1/2 translate-y-1/2">
                    <div className="w-full h-full bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                      +5
                    </div>
                  </div>

                  {/* Connection Lines - using SVG */}
                  <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                    <line
                      x1="20%"
                      y1="20%"
                      x2="50%"
                      y2="50%"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-border"
                    />
                    <line
                      x1="10%"
                      y1="50%"
                      x2="50%"
                      y2="50%"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-border"
                    />
                    <line
                      x1="20%"
                      y1="80%"
                      x2="50%"
                      y2="50%"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-border"
                    />
                    <line
                      x1="40%"
                      y1="95%"
                      x2="50%"
                      y2="50%"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-border"
                    />
                    <line
                      x1="80%"
                      y1="20%"
                      x2="50%"
                      y2="50%"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-border"
                    />
                    <line
                      x1="90%"
                      y1="50%"
                      x2="50%"
                      y2="50%"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-border"
                    />
                    <line
                      x1="80%"
                      y1="80%"
                      x2="50%"
                      y2="50%"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-border"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Assist Section */}
        <div className="mx-auto max-w-6xl mb-20 md:mb-32">
          <div className="relative bg-[#4F86F7] rounded-[2.5rem] p-6 md:p-12 lg:p-16 overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 flex items-center justify-center opacity-30" style={{ "--foreground": "oklch(1 0 0)" } as React.CSSProperties}>
              <Ripple mainCircleSize={300} numCircles={6} />
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Text */}
              <div className="order-2 lg:order-1">
                <BlurReveal delay={0.1}>
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    AI that answers questions for you, real-time
                  </h2>
                </BlurReveal>
                <BlurReveal delay={0.2}>
                  <p className="text-lg md:text-xl text-white/90 font-medium leading-relaxed">
                    Cluely uses the screen, transcript, and AI to answer questions for you, live.
                  </p>
                </BlurReveal>
              </div>

              {/* Right Side - Floating UI */}
              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <BlurReveal delay={0.3}>
                  <div className="relative w-full max-w-md">
                    {/* Glass Card */}
                    <div className="relative bg-black/20 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
                      {/* Floating Badge */}
                      <div className="absolute -top-4 right-6 bg-[#0B2568] text-white text-sm font-medium px-4 py-2 rounded-xl rounded-tr-sm shadow-lg border border-white/10">
                        What do I say next?
                      </div>

                      {/* Content */}
                      <div className="mt-4 mb-8">
                        <p className="text-white text-lg leading-relaxed font-medium">
                          "I hear you on the integration concerns—that's usually the first thing that comes up. We've actually built direct connectors for the tools you mentioned, and our average setup time is only half a day."
                        </p>
                      </div>

                      {/* Input Area */}
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-xl blur-sm transition-opacity opacity-0 group-hover:opacity-100" />
                        <div className="relative flex items-center gap-3 bg-white/10 border border-white/10 rounded-xl px-4 py-3.5 text-white/60 transition-colors hover:bg-white/15 hover:border-white/20">
                          <span className="text-sm">Ask,</span>
                          <div className="flex items-center justify-center w-5 h-5 bg-white/20 rounded-[4px] border border-white/10">
                            <Command className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-sm">for Assist</span>
                        </div>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/30 blur-[100px] rounded-full" />
                  </div>
                </BlurReveal>
              </div>
            </div>
          </div>
        </div>

        <BentoGrid />
      </div>
    </section>
  )
}
