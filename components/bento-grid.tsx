"use client"

import { BlurReveal } from "@/components/BlurReveal"

export function BentoGrid() {
    return (
        <div className="mx-auto max-w-6xl py-8 md:py-12 px-4 md:px-16 lg:px-32 xl:px-48">
            <BlurReveal delay={0.1}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-300 bg-amber-50 text-amber-800 text-sm font-medium mb-12">
                    <span>🔑</span>
                    Unlock Your Network
                </div>
            </BlurReveal>

            {/* Bento Grid - Exact Reference Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[180px] gap-3 max-w-6xl mx-auto">
                {/* Large Card 1 - Make Opportunity Visible (Top Left, 2 cols x 2 rows) */}
                <div className="lg:col-span-2 lg:row-span-2 group relative flex flex-col justify-between overflow-hidden p-6 rounded-2xl bg-emerald-50 border-2 border-slate-200 transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-emerald-100/50">
                    <div className="flex items-center justify-between mb-4 relative z-10">
                        <span className="text-xs font-medium uppercase tracking-wider text-emerald-700">VISIBILITY</span>
                    </div>
                    <div className="mt-auto relative z-10">
                        <h3 className="font-medium mb-2 text-xl lg:text-2xl text-emerald-900">
                            Make Opportunity Visible
                        </h3>
                        <p className="leading-relaxed text-base text-emerald-700">
                            Your connections already hold supply, demand, and capability. This platform brings that information to the surface — when timing matters most.
                        </p>
                    </div>
                </div>

                {/* Small Card 2 - Act at the Right Moment */}
                <div className="group relative flex flex-col justify-between overflow-hidden p-6 rounded-2xl bg-neutral-100 border-2 border-slate-200 transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-neutral-50">
                    <div className="flex items-center justify-between mb-4 relative z-10">
                        <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">TIMING</span>
                    </div>
                    <div className="mt-auto relative z-10">
                        <h3 className="font-medium mb-2 text-lg text-black">
                            Act at the Right Moment
                        </h3>
                        <p className="leading-relaxed text-sm text-neutral-600">
                            Live orders and real-time signals ensure you see demand and availability as they emerge — not after the opportunity has passed.
                        </p>
                    </div>
                </div>

                {/* Small Card 3 - Search People, Not Just Listings */}
                <div className="group relative flex flex-col justify-between overflow-hidden p-6 rounded-2xl bg-neutral-100 border-2 border-slate-200 transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-neutral-50">
                    <div className="flex items-center justify-between mb-4 relative z-10">
                        <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">SEARCH</span>
                    </div>
                    <div className="mt-auto relative z-10">
                        <h3 className="font-medium mb-2 text-lg text-black">
                            Search People, Not Just Listings
                        </h3>
                        <p className="leading-relaxed text-sm text-neutral-600">
                            Find who can deliver, who is looking, and who has done it before. Because the right person is often more valuable than the right product.
                        </p>
                    </div>
                </div>

                {/* Large Card 4 - Confidence Through Transparency (Right, 2 cols x 2 rows) */}
                <div className="lg:col-span-2 lg:row-span-2 group relative flex flex-col justify-between overflow-hidden p-6 rounded-2xl bg-blue-50 border-2 border-slate-200 transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-blue-100/50">
                    <div className="flex items-center justify-between mb-4 relative z-10">
                        <span className="text-xs font-medium uppercase tracking-wider text-blue-700">TRUST</span>
                    </div>
                    <div className="mt-auto relative z-10">
                        <h3 className="font-medium mb-2 text-xl lg:text-2xl text-blue-900">
                            Confidence Through Transparency
                        </h3>
                        <p className="leading-relaxed text-base text-blue-700">
                            See activity, reliability, and participation across your network. Make decisions backed by real performance, not guesswork.
                        </p>
                    </div>
                </div>

                {/* Small Card 5 - Work Globally Without Friction */}
                <div className="group relative flex flex-col justify-between overflow-hidden p-6 rounded-2xl bg-neutral-100 border-2 border-slate-200 transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-neutral-50">
                    <div className="flex items-center justify-between mb-4 relative z-10">
                        <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">GLOBAL</span>
                    </div>
                    <div className="mt-auto relative z-10">
                        <h3 className="font-medium mb-2 text-lg text-black">
                            Work Globally Without Friction
                        </h3>
                        <p className="leading-relaxed text-sm text-neutral-600">
                            Conversations, catalogs, and negotiations translate instantly — while preserving technical accuracy and industry language.
                        </p>
                    </div>
                </div>

                {/* Small Card 6 - Momentum That Compounds */}
                <div className="group relative flex flex-col justify-between overflow-hidden p-6 rounded-2xl bg-neutral-100 border-2 border-slate-200 transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-neutral-50">
                    <div className="flex items-center justify-between mb-4 relative z-10">
                        <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">MOMENTUM</span>
                    </div>
                    <div className="mt-auto relative z-10">
                        <h3 className="font-medium mb-2 text-lg text-black">
                            Momentum That Compounds
                        </h3>
                        <p className="leading-relaxed text-sm text-neutral-600">
                            Visible contributions encourage responsiveness, consistency, and trust. A more active network becomes a more valuable one.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
