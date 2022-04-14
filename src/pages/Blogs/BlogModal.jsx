import styles from './Modal.module.css'
import CommentsContainer from './CommentsContainer';


const BlogModal = ({blog, handleClose, show}) => {

  if(!show){
    return null
  }

  return (
    <div onClick={handleClose}>
      <div className={styles.modal} onClick={evt => evt.stopPropagation()}>
        <div className={styles.modalBody} >
          
          <div className={styles.bigImg}>
            <img
                src = {blog?.artworkLink}
                alt = 'generated img'
            />
          </div>
          <div className={styles.smallImg}>
            <img
                src = {blog?.contentLink}
                alt = 'generated img'
            />
            <img
                src = {blog?.styleLink}
                alt = 'generated img'
            />
          </div>
          <button onClick={handleClose}>CLOSE</button>
        </div>
          <div className={styles.textArea}>
            <h3>{blog.caption}</h3>
            <h6>Posted: {blog.date.slice(8, 11)} {blog.date.slice(12, 16)}</h6>
            <CommentsContainer blog={blog}/>
          </div>
      </div>
    </div>
   );
}

export default BlogModal