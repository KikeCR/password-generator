import React from 'react'
import './App.css'
import { Provider } from './components/ui/provider'
import { PasswordGeneratorView } from './packages/@password-generator/views/PasswordGenerator'

function App() {
  return (
    <Provider>
      <div className="password-generator-app">
        <PasswordGeneratorView />
      </div>
    </Provider>
  )
}

export default App
