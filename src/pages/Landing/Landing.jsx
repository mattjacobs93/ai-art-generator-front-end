import styles from './Landing.module.css'
import * as artworkService from '../../services/artworkService'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
    </main>
  )
}

export default Landing