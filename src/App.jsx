import { Fragment, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Settings } from './screens/Settings'
import { Error } from './screens/Error'
import { Home } from './screens/Home'
import { Header } from './components/Header'
import {
  coloredTheme,
  darkTheme,
  lightTheme,
} from './theme'
import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
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
            path={HOME_PAGE_ROUTE}
            element={<Home />}
          />
          <Route
            path={SETTINGS_PAGE_ROUTE}
            element={
              <Settings handleThemeChange={toggleTheme} />
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </ThemeProvider>
    </Fragment>
  )
}
