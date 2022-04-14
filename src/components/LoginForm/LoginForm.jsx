import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './LoginForm.module.css'
import * as authService from '../../services/authService'

const LoginForm = props => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const navigate = useNavigate()

  const handleChange = e => {
    props.updateMessage('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await authService.login(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  return (
    <div className={styles.container}>
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.form}
    >
      <div className={styles.inputContainer}>
        <label htmlFor="email" className={styles.label}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email</label>
        <input
          type="text"
          autoComplete="off"
          id="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
          placeholder="Email"
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="password" className={styles.label}>Password</label>
        <input
          type="password"
          autoComplete="off"
          id="password"
          value={formData.password}
          name="password"
          onChange={handleChange}
          placeholder="Password"
        />
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>Log In</button>
        {/* <Link to="/SignUp">
          <button>SIGN UP</button>
        </Link> */}
      </div>
    </form>
      <div>Don't have an account? <Link to='/signup'> <span>Sign up here </span></Link>
      </div>
    </div>
  )
}

export default LoginForm
