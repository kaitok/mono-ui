'use client'
import { createContext, useContext, useState } from 'react'

const SidebarContext = createContext()

const Subnav = () => {
  return <div>sidebar</div>
}

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <SidebarContext.Provider value={{ isOpen, handleClick }}>
      <SidebarNav />
    </SidebarContext.Provider>
  )
}

function SidebarNav() {
  const { isOpen, handleClick } = useContext(SidebarContext)

  return (
    <div>
      <button onClick={handleClick}>Toggle sidebar</button>

      {isOpen && <Subnav />}
    </div>
  )
}
