import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { EcomProvider } from './context/Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EcomProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </EcomProvider>
  </StrictMode>,
)
