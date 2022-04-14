import { useState } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import styles from './Login.module.css'

const LoginPage = props => {

  return (
    <main className={styles.container}>
      
      <LoginForm
        handleSignupOrLogin={props.handleSignupOrLogin}
      />
    </main>
  )
}

export default LoginPage
