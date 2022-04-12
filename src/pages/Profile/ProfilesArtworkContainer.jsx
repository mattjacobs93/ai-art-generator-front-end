import { ArtworkCard } from "./ArtworkCard"

function ProfilesArtworkContainer ({artwork}) {

  return (
    <div>
      <ul>
      {
        
        artwork.map(art => (
          <li>
            <ArtworkCard art={art}/>
          </li>
        ))
       
      }
       </ul>
    </div>
  )
}

export default ProfilesArtworkContainer