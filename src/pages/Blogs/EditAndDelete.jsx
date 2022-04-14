import * as blogService from '../../services/blogService'
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import styles from './BlogCard.module.css'

const EditAndDelete = ({blog, forceUpdate}) => {
  const navigate = useNavigate()

  const handleDelete = () => {
    console.log('delete')
    blogService.delete(blog.id)
    .then(()=>forceUpdate())

    
  }

  return (
    <div className={styles.editDeleteContainer}>
      <Link to='/blogs/edit' state={{blog}}><i class="fa-solid fa-wrench"></i></Link> 
      {/* <button className={styles.deleteButton} onClick={handleDelete}>DELETE</button> */}
      <h3 className={styles.deleteButton} onClick={handleDelete}><i class="fa-solid fa-trash-can"></i></h3> 
        
      
    </div>
  )
}

export default EditAndDelete