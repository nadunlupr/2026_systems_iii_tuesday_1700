import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppRouter from './AppRouter.jsx'
import StoreProvider from './store/StoreProvider.jsx'

createRoot(document.getElementById('root')).render(

  <StoreProvider>
    <AppRouter />
  </StoreProvider>
)
