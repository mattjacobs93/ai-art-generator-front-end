import { ArtworkCard } from "./ArtworkCard"
import styles from './ProfilesArtworkContainer.module.css'

function ProfilesArtworkContainer ({artwork}) {

  return (
    <div className={styles.ArtworkCard}>
      {
        
        artwork.map(art => (
            <ArtworkCard 
              art={art} 
              key={art.id}
            />
        ))
       
      }
    </div>
  )
}

export default ProfilesArtworkContainer