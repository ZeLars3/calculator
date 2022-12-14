import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { App } from './App'
import reportWebVitals from './reportWebVitals'
import GlobalStyles from './styles/globalStyles'

const root = ReactDOM.createRoot(
  document.getElementById('root'),
)
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

reportWebVitals()
