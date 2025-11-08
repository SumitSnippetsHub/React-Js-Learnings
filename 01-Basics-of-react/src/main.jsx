import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Lessons/02_EventsLearning/index.css'
import App from './Lessons/02_EventsLearning/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)