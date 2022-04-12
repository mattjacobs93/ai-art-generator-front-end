import styles from './ArtworkCard.module.css'
import { Link } from 'react-router-dom'

function ArtworkCard ({art}) {
  const handleClick = () => {
    console.log('make blog button clicked')
  }
  return (
    <div>
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
        <div className={styles.blogLinkDiv}>
          <Link to='/blogs/new'>Make a Blog Post about this Artwork</Link>
        </div>
    </div>
  )

}


export {
  ArtworkCard
}