import { Link, useParams, useLocation } from 'react-router-dom'
import styles from './NavBar.module.css'
import { useEffect } from 'react'


const NavBar = ({ user, handleLogout }) => {

  const location = useLocation()

  // useEffect(()=>{
    
  //   console.log('path: ', location.pathname)
  // },[])



  return (
    <>
      {user && !location?.pathname.toLowerCase().includes('login')  && !location?.pathname.toLowerCase().includes('signup')?
        <nav className={styles.nav}>
          <ul className={styles.container}>
            <div className={styles.leftnav}>
              <h2><Link to='/blogs'>AI Art Generator</Link></h2>
            </div>
            <div className={styles.rightnav}>
              <li><Link to="/createimage">Create Ai Art</Link></li>
              <li><Link to="/blogs">Explore</Link></li>
              <li><Link to="/profile">My Art</Link></li>
              <li><Link to="/Login" onClick={handleLogout}><i class="fa-solid fa-arrow-right-from-bracket"></i></Link></li>
            </div>
            
          </ul>
        </nav>
      :
        <nav>
          {/* <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul> */}
        </nav>
      }
    </>
  )
}

export default NavBar