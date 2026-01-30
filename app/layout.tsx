import type { PropsWithChildren } from 'react'
import Provider from '@/app/provider'
import './globals.css'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
