import * as blogService from '../../services/blogService'
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'

const EditAndDelete = ({blog, forceUpdate}) => {
  const navigate = useNavigate()

  const handleDelete = () => {
    console.log('delete')
    blogService.delete(blog.id)
    .then(()=>forceUpdate())

    
  }

  return (
    <div>
      <Link to='/blogs/edit' state={{blog}}>Edit</Link> <div onClick={handleDelete}>Delete</div>
    </div>
  )
}

export default EditAndDelete