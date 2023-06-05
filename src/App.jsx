import React from 'react'
import Login from './pages/Login'
import { useAuthState } from './context/auth-context'
import Dashboard from './pages/Dashboard'

function App() {
  const { token } = useAuthState()
  return (
    <>
      {token ? <Dashboard /> : <Login />}
    </>
  )

}
export default App