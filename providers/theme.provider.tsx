'use client'

import { type PropsWithChildren, useEffect } from 'react'
import { useThemeStore } from '@/stores/theme.store'

export function ThemeProvider({ children }: PropsWithChildren) {
  const theme = useThemeStore((state) => state.theme)

  useEffect(() => {
    const root = document.documentElement

    root.classList.remove('light', 'dark')
    root.classList.add(theme)
  }, [theme])

  return children
}
