import { Inter } from 'next/font/google'
import type { PropsWithChildren } from 'react'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
