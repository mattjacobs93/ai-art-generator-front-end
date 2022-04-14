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
      navigate('/blogs')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.inside}>

      <h1>Welcome</h1>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <div className={styles.inputContainer}>
          <label htmlFor="email" className={styles.label}></label>
          <input
            type="text"
            autoComplete="off"
            id="email"
            value={formData.email}
            name="email"
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="password" className={styles.label}></label>
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={formData.password}
            name="password"
            onChange={handleChange}
            placeholder="Password"
            required
          />
        </div>
        <div className={styles.buttonContainer}>
          <button 
            className={styles.button}>
              Log In
            </button>
        </div>
      </form>
        <div className={styles.signup}>
          Don't have an account? <br />
          <Link to='/signup'> 
          <br />
            <span>Sign up here</span>
          </Link>
        </div>
      </div>
      </div>
  )
}

export default LoginForm
