'use client'

import { SubpageGNB } from '@/components/SubpageGNB'
import { Footer } from '@/components/sections/Footer'

export default function IdentiVisLayout({ 
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