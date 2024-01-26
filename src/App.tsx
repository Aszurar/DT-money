import './theme/global.css'

import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'

export function App() {
  return (
    <div className="min-h-screen bg-gray-800 antialiased">
      <Header />
      <Dashboard />
    </div>
  )
}
