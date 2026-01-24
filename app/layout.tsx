import { Inter } from 'next/font/google'
import type { PropsWithChildren } from 'react'
import './globals.css'
import { Topbar } from '@/components/topbar'
import Footer from '@/components/footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" className={inter.variable}>
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
