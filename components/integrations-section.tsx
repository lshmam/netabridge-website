"use client"

import { Button } from "@/components/ui/button"
import { Search, FileCode, MoreVertical } from "lucide-react"
import { BlurReveal } from "@/components/BlurReveal"
import Image from "next/image"

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
                  <div className="absolute inset-0 flex items-center justify-center">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="absolute w-24 h-24 rounded-full border border-blue-500/30 bg-blue-500/5 animate-ripple"
                        style={{
                          animationDelay: `${i * 1}s`,
                          zIndex: 0,
                        }}
                      />
                    ))}
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

        {/* Feature Cards Section - Bento Grid */}
        <div className="mx-auto max-w-6xl">
          <BlurReveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-300 bg-amber-50 text-amber-800 text-sm font-medium mb-12">
              <span>🔑</span>
              Unlock Your Network
            </div>
          </BlurReveal>

          {/* Bento Grid - Exact Reference Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[180px] gap-3 max-w-6xl mx-auto">
            {/* Large Card 1 - Real-Time Sync (Top Left, 2 cols x 2 rows) */}
            <div className="lg:col-span-2 lg:row-span-2 group relative flex flex-col justify-between overflow-hidden p-6 rounded-2xl bg-emerald-50 border-2 border-slate-200 transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-emerald-100/50">
              <div className="flex items-center justify-between mb-4 relative z-10">
                <span className="text-xs font-medium uppercase tracking-wider text-emerald-700">SYNC</span>
              </div>
              <div className="mt-auto relative z-10">
                <h3 className="font-medium mb-2 text-xl lg:text-2xl text-emerald-900">
                  Real-Time Network Updates
                </h3>
                <p className="leading-relaxed text-base text-emerald-700">
                  Never miss important changes. Track new roles, relocations, funding rounds, and announcements across your entire network automatically.
                </p>
              </div>
            </div>

            {/* Small Card - Smart Search (Top Right, Row 1) */}
            <div className="group relative flex flex-col justify-between overflow-hidden p-6 rounded-2xl bg-neutral-100 border-2 border-slate-200 transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-neutral-50">
              <div className="flex items-center justify-between mb-4 relative z-10">
                <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">SEARCH</span>
              </div>
              <div className="mt-auto relative z-10">
                <h3 className="font-medium mb-2 text-lg text-black">
                  Natural Language Search
                </h3>
                <p className="leading-relaxed text-sm text-neutral-600">
                  Ask questions naturally. Find the right connections instantly without complex filters.
                </p>
              </div>
            </div>

            {/* Small Card - API Integration (Top Right, Row 1) */}
            <div className="group relative flex flex-col justify-between overflow-hidden p-6 rounded-2xl bg-neutral-100 border-2 border-slate-200 transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-neutral-50">
              <div className="flex items-center justify-between mb-4 relative z-10">
                <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">INTEGRATE</span>
              </div>
              <div className="mt-auto relative z-10">
                <h3 className="font-medium mb-2 text-lg text-black">
                  API-First Platform
                </h3>
                <p className="leading-relaxed text-sm text-neutral-600">
                  Connect with your existing tools. Every feature accessible via our comprehensive API.
                </p>
              </div>
            </div>

            {/* Large Card 2 - Relationship Mapping (Right, 2 cols x 2 rows) */}
            <div className="lg:col-span-2 lg:row-span-2 group relative flex flex-col justify-between overflow-hidden p-6 rounded-2xl bg-blue-50 border-2 border-slate-200 transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-blue-100/50">
              <div className="flex items-center justify-between mb-4 relative z-10">
                <span className="text-xs font-medium uppercase tracking-wider text-blue-700">INTELLIGENCE</span>
              </div>
              <div className="mt-auto relative z-10">
                <h3 className="font-medium mb-2 text-xl lg:text-2xl text-blue-900">
                  Relationship Mapping
                </h3>
                <p className="leading-relaxed text-base text-blue-700">
                  Visualize connection paths and strength. Discover hidden opportunities through second and third-degree connections.
                </p>
              </div>
            </div>

            {/* Small Card - Privacy & Security (Bottom Left) */}
            <div className="group relative flex flex-col justify-between overflow-hidden p-6 rounded-2xl bg-neutral-100 border-2 border-slate-200 transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-neutral-50">
              <div className="flex items-center justify-between mb-4 relative z-10">
                <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">SECURITY</span>
              </div>
              <div className="mt-auto relative z-10">
                <h3 className="font-medium mb-2 text-lg text-black">
                  Enterprise-Grade Privacy
                </h3>
                <p className="leading-relaxed text-sm text-neutral-600">
                  Your data stays yours. SOC 2 compliant with end-to-end encryption.
                </p>
              </div>
            </div>

            {/* Small Card - Smart Notifications (Bottom Left) */}
            <div className="group relative flex flex-col justify-between overflow-hidden p-6 rounded-2xl bg-neutral-100 border-2 border-slate-200 transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-neutral-50">
              <div className="flex items-center justify-between mb-4 relative z-10">
                <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">ALERTS</span>
              </div>
              <div className="mt-auto relative z-10">
                <h3 className="font-medium mb-2 text-lg text-black">
                  Smart Notifications
                </h3>
                <p className="leading-relaxed text-sm text-neutral-600">
                  Get alerted to relevant opportunities. Customizable filters keep you focused.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
