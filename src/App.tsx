import './theme/global.css'

import { Toaster } from 'sonner'

import { Dashboard } from './components/Dashboard'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { ResponsivenessProvider } from './contexts/responsiveness'
import { TransactionsProvider } from './contexts/transactions'
import { axeAccessibilityReporter } from './utils/axeAccessibilityReporter'

axeAccessibilityReporter()
export function App() {
  return (
    <div className="min-h-screen bg-gray-800 antialiased">
      <ResponsivenessProvider>
        <TransactionsProvider>
          <Header />
          <Dashboard />
          <Footer />
          <Toaster richColors />
        </TransactionsProvider>
      </ResponsivenessProvider>
    </div>
  )
}
