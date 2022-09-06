import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Settings } from './screens/Settings'
import { Error } from './screens/Error'
import { Header } from './components/Header'
import {
  Calculator,
  CalculatorFC,
} from './components/Calculator'
import {
  coloredTheme,
  darkTheme,
  lightTheme,
} from './styles'
import {
  HOME_PAGE_ROUTE_CL,
  HOME_PAGE_ROUTE_FC,
  SETTINGS_PAGE_ROUTE,
} from './constants'
import { ThemeContext } from './utils'

export const App = () => {
  const [theme, setTheme] = useState(lightTheme)

  const toggleTheme = event => {
    const { value } = event.target
    switch (value) {
      case 'light':
        setTheme(lightTheme)
        break
      case 'dark':
        setTheme(darkTheme)
        break
      case 'color':
        setTheme(coloredTheme)
        break
    }
  }

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ThemeProvider theme={theme}>
          <Header />
          <Routes>
            <Route
              path={HOME_PAGE_ROUTE_CL}
              element={<Calculator />}
            />
            <Route
              path={HOME_PAGE_ROUTE_FC}
              element={<CalculatorFC />}
            />
            <Route
              path={SETTINGS_PAGE_ROUTE}
              element={<Settings />}
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  )
}
