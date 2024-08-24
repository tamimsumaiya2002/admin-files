import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import CreateEvent from './CreateEvent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CreateEvent/>
  </StrictMode>,
)

