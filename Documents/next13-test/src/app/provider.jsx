'use client'

import { ThemeProvider } from 'next-themes'
import { useEffect, useState } from 'react'

const Provider = ({ children }) => {

  const [isMounted, setMounted] = useState(false)

  // =====> to avoid hydration errors 
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <ThemeProvider>{children}</ThemeProvider>
  )
}
export default Provider