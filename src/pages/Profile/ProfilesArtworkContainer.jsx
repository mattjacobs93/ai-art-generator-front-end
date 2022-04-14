import { ArtworkCard } from "./ArtworkCard"
import styles from './ProfilesArtworkContainer.module.css'

function ProfilesArtworkContainer ({artwork, forceUpdate}) {



  return (
    <div className={styles.ArtworkCard}>
      {

        [...artwork].sort((a1, a2)=>  a2.id - a1.id).map(art => (
            <ArtworkCard 
              art={art} 
              key={art.id}
              forceUpdate={forceUpdate}
            />
        ))
       
      }
    </div>
  )
}

export default ProfilesArtworkContainer