'use client'

import styles from './themButton.module.css'
import { useTheme } from 'next-themes'
import { ThemeIcon } from '../../../../../public/Icons'
import { useState, useEffect } from 'react'

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme('dark')
  const [isMounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className={styles.modeBox} onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
      <ThemeIcon size={26} />
      <span> {resolvedTheme === 'dark' ? 'Dark' : 'Light'} Mode</span>
    </div>
  )
}
export default ThemeButton