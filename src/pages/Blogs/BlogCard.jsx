// import styles from './BlogCard.module.css'
import styles from './BlogCard.module.css'
// import { Link } from 'react-router-dom'

function BlogCard ({blog}) {
  // const handleClick = () => {
  //   console.log('make blog button clicked')
  // }
  return (
    <div>
        <div className={styles.imagesContainer}>
          <div className={styles.generatedImage}>
            <img
              src = {blog?.artworkLink}
              alt = 'generated img'
              />
          </div>
          <div className={styles.ContentStyle}>
            <img
              src = {blog?.contentLink}
              alt = 'content img'
              />
            <img
            src = {blog?.styleLink}
            alt = 'style img'
            />
          </div>
          {/* <div className={styles.contentStyle}>
            
          </div> */}
          
        <div className={styles.caption}>
            <h3>{blog?.caption}</h3>
        </div>        
      </div>
    </div>
  )

}


export {
  BlogCard
}