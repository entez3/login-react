import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { useAuthDispatch } from '../../context/auth-context'
import { actionType } from '../../context/Reducer'

const fetchToken = async (username, password) => {
  return axios.post('http://localhost:3001/login',
    {
      username,
      password
    }).then(Response=>Response.data)
}
const fetchTokenCurrentUserInfo = (token) => {
  return axios.get('http://localhost:3001/users/me', {
    headers: {
      authorization: token
    }
  }).then(response => response.data)
}

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState(null)

  const dispatch = useAuthDispatch()
  const handleLogin = (e) => {
    e.preventDefault()
    fetchToken(username, password)
      .then(({ success, data }) => {
        if (success) {
          setToken(data)
          console.log(token);
        }
      })
  }

  useEffect(() => {
    if (token) {
      fetchTokenCurrentUserInfo(token)
        .then(({ success, data }) => {
          if (success) {
            dispatch({
              type: actionType.LOGIN_SUCCESS,
              payload: {
                user: data,
                token
              }
            })
          }
        })
    }
  }, [token, dispatch])

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