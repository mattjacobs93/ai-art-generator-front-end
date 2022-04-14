import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import * as artworkService from '../../services/artworkService'
import ProfilesArtworkContainer from './ProfilesArtworkContainer'
import styles from './Profile.module.css'

const Profile = ({user}) => {
  const [profilesArtwork, setProfilesArtwork] = useState()
  const [updateState, setUpdateState] = useState({"state":"state"})

  const forceUpdate = () => {
    setUpdateState({...updateState})
  }


  useEffect(()=>{
    console.log(user)
    artworkService.getProfilesArtwork(user.id)
    .then(artwork=>setProfilesArtwork(artwork))
  },[user, updateState])

  return (
    <> 

            <div className={styles.profileContainer}>
            <h1>My AI-Generated Artwork</h1>
            <div className={styles.profileArt}>

            {
              (profilesArtwork && profilesArtwork.length > 0) ?
              <ProfilesArtworkContainer artwork={profilesArtwork} forceUpdate={forceUpdate} />
              :
            
              <h2>Create AI Art!</h2>
            }

            </div>

            </div>

    </>
  )
}
 
export default Profile