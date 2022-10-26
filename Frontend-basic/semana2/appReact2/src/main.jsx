import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'

import Countries from './components/AppDocu'

const root = document.getElementById('root')

createRoot(root).render(
  <StrictMode>
    <Countries />
  </StrictMode>)
