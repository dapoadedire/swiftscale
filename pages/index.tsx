// import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import { ContactForm } from '@/components/ContactForm'
import { Copy } from '@/components/Copy'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={` bg-secondary min-h-screen ${inter.className}`}>
      <Header />
      <div
      className='grid grid-cols-1 md:grid-cols-2 gap-10 px-8 md:px-16 py-16 md:py-32'
      >
        <Copy />
        <ContactForm />
      </div>
    </main>
  )
}
