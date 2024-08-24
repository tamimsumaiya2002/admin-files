import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FeedbackContainer from './FeedbackContainer.jsx'
import FeedbackTitle from './FeedbackTitle.jsx'
import './style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FeedbackTitle/>
    <FeedbackContainer/>
  </StrictMode>
)
