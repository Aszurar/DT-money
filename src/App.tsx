import './theme/global.css'

import { Toaster } from 'sonner'

import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { TransactionsProvider } from './contexts/transactions'

export function App() {
  return (
    <div className="min-h-screen bg-gray-800 antialiased">
      <TransactionsProvider>
        <Header />
        <Dashboard />
        <Toaster richColors />
      </TransactionsProvider>
    </div>
  )
}
