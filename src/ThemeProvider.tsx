import React, { createContext, useState } from 'react'

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
})

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const initTheme = 'light'
  const [theme, setTheme] = useState(initTheme)
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  const contextValue = {
    theme,
    toggleTheme,
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext }
