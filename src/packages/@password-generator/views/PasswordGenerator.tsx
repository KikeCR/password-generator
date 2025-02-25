import React, { lazy } from 'react'

const PasswordGenerator = lazy(() => import('../apps/PasswordGenerator/PasswordGenerator'))

export const PasswordGeneratorView = () => {
  return (
      <PasswordGenerator/>
  )
}
