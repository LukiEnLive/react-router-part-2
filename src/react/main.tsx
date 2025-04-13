import "./global/css/style.css"

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Application } from './application/application'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
)
