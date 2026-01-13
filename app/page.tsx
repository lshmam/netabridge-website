import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { NetworkDashboard } from "@/components/network-dashboard"
import { IntegrationsSection } from "@/components/integrations-section"
import { CTASection } from "@/components/cta-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BentoGrid } from "@/components/bento-grid"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <BentoGrid />
        {/* <NetworkDashboard /> */}
        <IntegrationsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
