"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Search, Users, Check, ChevronDown } from "lucide-react"
import { BlurReveal } from "@/components/BlurReveal"
import { Globe } from "@/components/ui/globe"

const people = [
  { name: "Steve", initials: "ST", location: "Toronto, ON", role: "Construction Company Owner", relSummary: "2 Deals ongoing", openDeals: 3 },
  { name: "Michael Chang", initials: "MC", location: "Vancouver, BC", role: "Steel Supplier", relSummary: "5 Deals completed", openDeals: 1 },
  { name: "Sarah Miller", initials: "SM", location: "Montreal, QC", role: "Logistics Partner", relSummary: "1 Deal ongoing", openDeals: 4 },
  { name: "David Chen", initials: "DC", location: "New York, NY", role: "Equipment Buyer", relSummary: "New Contact", openDeals: 2 },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-8 md:py-12 px-4 md:px-16 lg:px-32 xl:px-48">
      <div className="bg-background relative overflow-hidden rounded-[2rem] md:rounded-[3rem] py-12 md:py-24 px-4 md:px-12">
        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <BlurReveal delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-balance">Get precise results</h2>
            </BlurReveal>
            <BlurReveal delay={0.2}>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                The search results are evaluated by AI for the best fit, so you instantly know who to approach and how
                you're connected.
              </p>
            </BlurReveal>
          </div>

          {/* Toggle Buttons */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <Button variant="outline" className="rounded-full bg-transparent">
              Smart Search
            </Button>
            <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90">
              Relationship Intelligence
            </Button>
          </div>

          <div className="bg-card border rounded-2xl shadow-lg overflow-hidden mb-16">
            {/* Filter Bar */}
            <div className="flex items-center gap-2 px-4 md:px-6 py-4 border-b bg-muted/30 overflow-x-auto no-scrollbar">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 text-amber-800 text-sm whitespace-nowrap">
                <span>Location</span>
                <span className="font-medium">is any of</span>
                <span className="bg-amber-200 px-2 py-0.5 rounded-full text-xs">3 Places</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-sm whitespace-nowrap">
                <span>X relationship</span>
                <span className="font-medium">is</span>
                <span>follows you</span>
              </div>
              <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />
            </div>

            {/* Table Header - Hidden on Mobile */}
            <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 border-b text-sm text-muted-foreground">
              <div className="col-span-1"></div>
              <div className="col-span-3">Name</div>
              <div className="col-span-2">Open Deals</div>
              <div className="col-span-3">Role</div>
              <div className="col-span-3">Relationship</div>
            </div>

            {/* Table Rows */}
            {people.map((person, index) => (
              <div
                key={person.name}
                className={`group flex flex-col md:grid md:grid-cols-12 gap-3 md:gap-4 px-4 md:px-6 py-4 md:items-center hover:bg-muted/30 transition-colors ${index !== people.length - 1 ? "border-b" : ""
                  }`}
              >
                {/* Mobile: Top Row with Avatar, Name, Relationship */}
                <div className="flex items-center justify-between md:contents">
                  <div className="flex items-center gap-3 md:col-span-4 lg:col-span-4">
                    <div className="md:hidden">
                      <input type="checkbox" className="rounded border-muted-foreground/30" />
                    </div>
                    <div className="hidden md:block md:col-span-1">
                      <input type="checkbox" className="rounded border-muted-foreground/30" />
                    </div>

                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-muted text-muted-foreground text-sm">{person.initials}</AvatarFallback>
                      </Avatar>
                      <div className="block md:hidden">
                        <span className="font-medium block">{person.name}</span>
                        <span className="text-xs text-muted-foreground">{person.location}</span>
                      </div>
                      <span className="font-medium hidden md:block">{person.name}</span>
                    </div>
                  </div>

                  {/* Mobile: Relationship (Right aligned on top row? maybe simple indicator) */}
                  {/* Hidden on mobile, shown in name block above */}
                </div>

                {/* Desktop: Open Deals Column */}
                <div className="hidden md:block md:col-span-2">
                  <div className="flex items-center gap-1">
                    <span className="font-medium text-lg">{person.openDeals}</span>
                  </div>
                </div>

                {/* Position and Experience - Mobile: Stacked below */}
                <div className="md:col-span-3 pl-[3.25rem] md:pl-0">
                  <p className="font-medium text-sm md:text-base">{person.role}</p>
                  <p className="text-sm text-muted-foreground">{person.location}</p>
                </div>

                <div className="md:col-span-3 pl-[3.25rem] md:pl-0 flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span className="text-sm text-muted-foreground">{person.relSummary}</span>
                </div>
              </div>
            ))}

            {/* AI Evaluation Tooltip */}
            <div className="relative mx-6 mb-6 mt-2">
              <div className="absolute right-0 bottom-0 bg-amber-50 border border-amber-200 rounded-xl p-4 max-w-md shadow-lg">
                <p className="text-sm text-amber-900">
                  Working at <span className="font-semibold text-amber-700">Rivian</span> and his PhD title is '
                  <span className="font-semibold text-blue-600">Multimodal Interaction Inside A Vehicle</span> Using Gaze,
                  Finger Pointing and Speech', which is related to electric vehicles.
                </p>
                <p className="text-xs text-amber-600 mt-2 text-right uppercase tracking-wide">Evaluated by AI</p>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          {/* <div className="grid gap-8 md:grid-cols-3 mt-24">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Search className="h-4 w-4 text-emerald-600" />
                </div>
                <h3 className="font-semibold">Search Your Entire Network at Once</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Find the right people across all your contacts in a single search. Easily include additional lists – like
                conference attendees, portfolio companies, or industry contacts – to expand your search scope.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-sm">!!</span>
                </div>
                <h3 className="font-semibold">Understands What You Actually Mean</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The search grasps the intent behind your words, not just exact phrases. Ask for 'someone who understands
                fintech regulation' and it'll find regulatory experts, compliance specialists, and financial services
                lawyers.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <Users className="h-4 w-4 text-blue-600" />
                </div>
                <h3 className="font-semibold">Sees the Complete Picture</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Considers each person's entire professional background against what you're looking for. This reveals
                meaningful connections that simple word-matching would miss entirely.
              </p>
            </div>
          </div> */}
        </div>
        <Globe className="top-28 opacity-40" />
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
      </div >
    </section >
  )
}
