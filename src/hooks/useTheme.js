import { useState, useEffect, createContext, useContext } from 'react'

export const ThemeContext = createContext({ isDark: true, toggle: () => {} })

export function useThemeProvider() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('tpg-theme') !== 'day')

  useEffect(() => {
    document.documentElement.classList.toggle('day', !isDark)
  }, [isDark])

  const toggle = () => {
    const next = !isDark
    setIsDark(next)
    localStorage.setItem('tpg-theme', next ? 'dark' : 'day')
  }

  return { isDark, toggle }
}

export function useTheme() {
  return useContext(ThemeContext)
}
