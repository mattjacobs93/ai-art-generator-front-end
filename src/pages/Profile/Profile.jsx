import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import * as artworkService from '../../services/artworkService'
import ProfilesArtworkContainer from './ProfilesArtworkContainer'

const Profile = ({user}) => {
  const [profilesArtwork, setProfilesArtwork] = useState()


  useEffect(()=>{
    console.log(user)
    artworkService.getProfilesArtwork(user.id)
    .then(artwork=>setProfilesArtwork(artwork))
  },[user])

  return (
    <> 
            <h1>This is {user.name}'s profile</h1>
            {
              (profilesArtwork && profilesArtwork.length > 0) ?
              <ProfilesArtworkContainer artwork={profilesArtwork} />
              :
            
              <h2>No artwork to show</h2>
            }

    </>
  )
}
 
export default Profile