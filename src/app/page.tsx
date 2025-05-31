"use client";

import React, { useState } from 'react'
import { GNB } from '@/components/GNB'
import { HeroSection } from '@/components/sections/HeroSection'
import { SolutionsSection } from '@/components/sections/SolutionsSection'
import { ProductivitySection } from '@/components/sections/ProductivitySection'
import { ClientsSection } from '@/components/sections/ClientsSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { Footer } from '@/components/sections/Footer'

export default function LandingPage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <>
      <GNB isVideoPlaying={isVideoPlaying} />
      <main>
        <HeroSection onVideoStateChange={setIsVideoPlaying} />
        <SolutionsSection />
        <ProductivitySection />
        <AboutSection />
        <ClientsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}
