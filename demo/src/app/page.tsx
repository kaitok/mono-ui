'use client'
import React, { useContext } from 'react'
import { Button } from '@kaitok/mono-ui'
// import { ThemeContext } from './ThemeProviderLocal'
import { ThemeContext } from '@kaitok/mono-ui'

export default function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const handleClick = () => {
    toggleTheme()
  }
  return (
    <div>
      <Button label={'button'} width={'200px'} />
      theme: {theme}
      <br />
      <button onClick={handleClick}>Toggle Theme</button>
      <br />
    </div>
  )
}
