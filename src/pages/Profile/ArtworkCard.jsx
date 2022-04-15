import styles from './ArtworkCard.module.css'
import { Link } from 'react-router-dom'
import * as artworkService from '../../services/artworkService'

function ArtworkCard ({art, forceUpdate}) {
  const handleClick = () => {
    console.log('make blog button clicked')
  }


  const handleDeleteArt = () => {
    console.log('delete')
    artworkService.delete(art.id)
    .then(()=>forceUpdate())
  }
  
  return (
    <div className={styles.ArtworkCard}>
        
        <div className={styles.imagesContainer}>
          <div className={styles.contentImage}>
            <img
              src = {art?.contentLink}
              alt = 'content img'
              />
          </div>
          <div className={styles.contentStyle}>
            <img
              src = {art?.styleLink}
              alt = 'style img'
              />
          </div>
          <div className={styles.generatedImage}>
            <img
              src = {art?.artworkLink}
              alt = 'generated img'
              />
          </div>
        </div>
        <div className={styles.share}>

          <Link 
            to='/blogs/new' 
            state={{art}}>
          <button className={styles.btngrad}>
              SHARE
          </button>
            </Link>
          <button className={styles.btngrad} onClick={handleDeleteArt}>
            DELETE
          </button>
        </div>
    </div>
  )

}


export {
  ArtworkCard
}