import './theme/global.css'

import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'

export function App() {
  return (
    <div className="antialiased min-h-screen bg-gray-800">
      <Header />
      <Dashboard />
    </div>
  )
}
