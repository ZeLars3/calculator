import { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Calculator } from './components/Calculator'
import { Settings } from './screens/Settings'
import { Error } from './screens/Error'
import { Header } from './components/Header'
import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from './constants'

export const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route
          index
          path={HOME_PAGE_ROUTE}
          element={<Calculator />}
        />
        <Route
          path={SETTINGS_PAGE_ROUTE}
          element={<Settings />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </Fragment>
  )
}
