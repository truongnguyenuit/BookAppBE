import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
// import { AuthContext } from '../../contexts/AuthContext'
// import AlertMessage from '../layout/AlertMessage' 
const LoginForm = () => {
  //Context
  //const { loginUser } = useContext('')

  //Local State
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  })

  const [alert, setAlert] = useState(null)

  const { username, password } = loginForm

  const onChangeLoginForm
  return (
    <div>Login</div>
  )
}

export default LoginForm