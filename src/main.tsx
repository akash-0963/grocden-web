import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Analytics } from '@vercel/analytics/react'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { Toaster } from './components/ui/toaster.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(

    <BrowserRouter>
    <App />
    <Analytics/>
    <Toaster />
    </BrowserRouter>
,
)
