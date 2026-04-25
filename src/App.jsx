import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeContext, useThemeProvider } from './hooks/useTheme'
import GlobalPortfolio from './views/GlobalPortfolio'
import DealPipeline from './views/DealPipeline'
import InvestorEngine from './views/InvestorEngine'
import HokkaidoPilot from './pilots/HokkaidoPilot'
import CostaRicaPilot from './pilots/CostaRicaPilot'

export default function App() {
  const theme = useThemeProvider()

  return (
    <ThemeContext.Provider value={theme}>
      <Routes>
        <Route path="/" element={<GlobalPortfolio />} />
        <Route path="/deals" element={<DealPipeline />} />
        <Route path="/investors" element={<InvestorEngine />} />
        <Route path="/pilot/hokkaido-resort" element={<HokkaidoPilot />} />
        <Route path="/pilot/antigua-master-plan" element={<HokkaidoPilot />} />
        <Route path="/pilot/cobano-preserve" element={<CostaRicaPilot />} />
        <Route path="*" element={<GlobalPortfolio />} />
      </Routes>
    </ThemeContext.Provider>
  )
}
