import { HeroSection } from "@/components/sections/hero-section"
import { FeaturedDestinations } from "@/components/sections/featured-destinations"
import { HowItWorks } from "@/components/sections/how-it-works"
import { SocialProof } from "@/components/sections/social-proof"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <SocialProof />
        <FeaturedDestinations />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  )
}
