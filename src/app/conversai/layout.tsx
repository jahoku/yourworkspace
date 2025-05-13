'use client'

import { SubpageGNB } from '@/components/SubpageGNB'
import { Footer } from '@/components/sections/Footer'

export default function ConversAILayout({ 
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