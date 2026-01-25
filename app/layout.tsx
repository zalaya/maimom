import { Caveat, Inter } from 'next/font/google'
import type { PropsWithChildren } from 'react'
import './globals.css'
import Footer from '@/components/layout/footer'
import { Topbar } from '@/components/layout/topbar'

const handwriting = Caveat({
  subsets: ['latin'],
  variable: '--font-handwriting',
  weight: ['400', '500']
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" className={`${inter.variable} ${handwriting.variable}`}>
      <body className="min-h-screen bg-white text-foreground">
        <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col bg-background shadow-sm">
          <Topbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

export default RootLayout
