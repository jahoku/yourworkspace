import { HeroSection } from '@/components/sections/HeroSection'
import { SolutionsSection } from '@/components/sections/SolutionsSection'
import { ProductivitySection } from '@/components/sections/ProductivitySection'
import { ClientsSection } from '@/components/sections/ClientsSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { Footer } from '@/components/sections/Footer'

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SolutionsSection />
      <ProductivitySection />
      <ClientsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
