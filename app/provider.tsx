import type { PropsWithChildren } from 'react'
import { ThemeProvider } from '@/providers/theme.provider'

export default function Provider({ children }: PropsWithChildren) {
  return <ThemeProvider>{children}</ThemeProvider>
}
