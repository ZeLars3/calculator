import { Fragment, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Settings, SettingsFC } from './screens/Settings'
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
} from './theme'
import {
  HOME_PAGE_ROUTE_CL,
  HOME_PAGE_ROUTE_FC,
  SETTINGS_PAGE_ROUTE_CL,
  SETTINGS_PAGE_ROUTE_FC,
} from './constants'

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
    <Fragment>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route
            path={HOME_PAGE_ROUTE_CL}
            element={<Calculator />}
          />
          <Route
            path={SETTINGS_PAGE_ROUTE_CL}
            element={
              <Settings handleThemeChange={toggleTheme} />
            }
          />
          <Route
            path={HOME_PAGE_ROUTE_FC}
            element={<CalculatorFC />}
          />
          <Route
            path={SETTINGS_PAGE_ROUTE_FC}
            element={
              <SettingsFC handleThemeChange={toggleTheme} />
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </ThemeProvider>
    </Fragment>
  )
}
