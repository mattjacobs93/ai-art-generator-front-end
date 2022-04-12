import { ArtworkCard } from "./ArtworkCard"

function ProfilesArtworkContainer ({artwork}) {

  return (
    <div>
      <ul>
      {
        
        artwork.map(art => (
          <li>
            <ArtworkCard 
              art={art} 
              key={art.id}
            />
          </li>
        ))
       
      }
       </ul>
    </div>
  )
}

export default ProfilesArtworkContainer