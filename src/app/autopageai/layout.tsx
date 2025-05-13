'use client'

import { SubpageGNB } from '@/components/SubpageGNB'
import { Footer } from '@/components/sections/Footer'

export default function AutoPageAILayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <>
      <SubpageGNB />
      {children}
      <Footer />
    </>
  )
} 