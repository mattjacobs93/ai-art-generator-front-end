function ProfilesArtworkContainer ({artwork}) {

  return (
    <div>
      <ul>
      {
        
        artwork.map(art => (
          <li>
          <img
          src = {art.artworkLink}
          alt = 'generated img'
          />
          </li>
        ))
       
      }
       </ul>
    </div>
  )
}

export default ProfilesArtworkContainer