import React, { useState } from 'react'
import './App.css'
import axios from 'axios'

const fetchToken = async (username, password) => {
  return axios.post('http://localhost:3001/login',
    {
      username,
      password
    })
}

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    fetchToken(username, password)
      .then(re => console.log(re.data))
  }
  return (
    <div className="login">
      <h1>Login</h1>
      <form method="post" onSubmit={handleLogin}>

        <input value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
          required="required" />

        <input value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          required="required" />

        <button type="submit" className="btn btn-primary btn-block btn-large">Let me in.</button>
      </form>
    </div>
  )
}

export default Login