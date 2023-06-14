'use client'
import React from 'react'
import { ThemeProvider } from '@kaitok/mono-ui'
// import { ThemeProvider } from './ThemeProviderLocal'

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>
}
