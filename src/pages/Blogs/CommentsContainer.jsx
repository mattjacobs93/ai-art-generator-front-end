import styles from './CommentsContainer.module.css'
import { useEffect, useState, useRef } from "react"
import { createComment } from '../../services/blogService'
// import CommentCard from "./CommentCard"

const CommentsContainer = ({blog}) => {

  const [commentFormData, setCommentFormData] = useState()
  const [blogState, setBlogState] = useState(blog)
  const [numComments, setNumComments] = useState()

  const commentFormElement = useRef()
  useEffect(()=> {
  }, [blogState])
  
  const handleCommentFormChange = evt => {
      setCommentFormData(evt.target.value)
  }
  const handleComment = (evt) => {
     evt.preventDefault()
     createComment({'text': commentFormData, blog_id: blogState.id})
     .then(newComment => {console.log('returned comment: ', newComment);})//setBlogState(newblogState)})
  }

//   const handleDeletedComment = (deletedCommentID) => {
//       let tempComments = blogState.comments
//       try {
//         tempComments= tempComments.filter(comment => comment._id != deletedCommentID)
//       }
  
//       catch (error) {
//         console.log(error)
//       }
      
//       let tempblogState = {...blogState, comments: tempComments}
//       setBlogState(tempblogState)
//     } 

  return (
      <div className={styles.commentContainer}>
          <div className={styles.comment}>
              <form ref={commentFormElement} onSubmit={handleComment}>
                  <textarea onChange={handleCommentFormChange} name="comment" cols="40" rows="2" placeholder=' Add a comment...'></textarea>
                  <button className={styles.commentButton}type="submit">Comment</button>
              </form>
          </div>
          <div className={styles.commentSection}>
          {
              blogState.comments?.map(comment => (
                <div>{blog?.profile_id}: {comment.text}</div>
                  // <CommentCard 
                  //     comment={comment} 
                  //     postID={post._id} 
                  //     profileID={profile._id} handleDeletedComment={handleDeletedComment}
                  //     // key={profile._id}
                  // />
              ))
          }
          </div>
      </div>
  )
}
 
export default CommentsContainer;