// import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import { ContactForm } from '@/components/ContactForm'
import { Copy } from '@/components/Copy'
import React from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={` bg-secondary min-h-screen ${inter.className}`}>
      <Header />
      <div
      className='grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-16 py-8 md:py-16'
      >
        <Copy />
        <ContactForm />
      </div>
    </main>
  )
}
