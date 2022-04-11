import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'

const Profile = ({user}) => {
  

  // useEffect(()=> {
  //   profileService.getAllProfiles()
  //   .then(profiles => setProfiles(profiles))
  // }, [])

  useEffect(()=>{console.log(user)},[user])

  return (
    <>
      {
        user && user.name ? 
          <h1>This is {user.name} profile page</h1>
        :
          <h1>Loading...</h1>
      }
     
    </>
  )
}
 
export default Profile