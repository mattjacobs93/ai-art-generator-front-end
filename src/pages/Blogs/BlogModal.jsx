import styles from './Modal.module.css'
import CommentsContainer from './CommentsContainer';


const BlogModal = ({blog, handleClose, show}) => {

  if(!show){
    return null
  }

  return ( 
    <div onClick={handleClose}>
      <div className={styles.modal} onClick={evt => evt.stopPropagation()}>
        <div className={styles.modalBody}>
          <button onClick={handleClose}>CLOSE</button>
          <h1>HELLO</h1>
          <img
              src = {blog?.contentLink}
              alt = 'generated img'
          />
          <img
              src = {blog?.styleLink}
              alt = 'generated img'
          />
          <img
              src = {blog?.artworkLink}
              alt = 'generated img'
          />
          <h3>caption</h3>
          <CommentsContainer blog={blog}/>
        </div>
      </div>
    </div>
   );
}

export default BlogModal