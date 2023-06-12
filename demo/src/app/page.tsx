'use client'
import { useContext } from 'react'
import { Button } from 'mono-ui'
import { ThemeContext, ThemeProvider } from 'mono-ui'

export default function Home() {
  // const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <div>
      <ThemeProvider>
        <Button label="button" width="200px" />
        Home
      </ThemeProvider>
    </div>
  )
}
