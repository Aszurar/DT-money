import { useContext } from 'react'

import { ResponsivenessContext } from '../contexts/responsiveness'

export function useResponsiveness() {
  const context = useContext(ResponsivenessContext)

  if (!context) {
    throw new Error(
      'useResponsiveness must be used within a ResponsivenessProvider',
    )
  }
  return context
}
