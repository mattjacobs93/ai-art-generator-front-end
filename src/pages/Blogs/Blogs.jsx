import  { useEffect, useState } from 'react'
import * as blogService from "../../services/blogService"
import { BlogCard } from './BlogCard'
// import { BlogModal } from './BlogModal'
import BlogModal from './BlogModal'
import EditAndDelete from './EditAndDelete'

const Blogs = ({user}) => {
    const [blogs, setBlogs] = useState()
    const [show, setShow] = useState(false)
    const [XBlogModal, setXBlogModal] = useState(null)
    const [update, setUpdate] = useState({})
    const forceUpdate = () => {
        setUpdate({...update})
    }
    
    useEffect(()=>{
        blogService.getAll()
        .then(returnedBlogs => setBlogs(returnedBlogs))
    },[update])

    const handleShow = () => setShow(true)
    const handleClose = () => {
    setShow(false)
    console.log('HANDLE CLOSE TRIGGERED')
    }

    return ( 
        <>
                        
            
            {
                blogs ?
                <>
                    {blogs?.map(blog => (
                        <div>

                        <div>
                            {user?.id === blog?.profile_id && forceUpdate ? <EditAndDelete blog={blog} forceUpdate={forceUpdate}/> : <div></div>}
                        </div>
                        <div onClick={() => {
                            setXBlogModal(blog); 
                            handleShow();
                        }}>
        
                        <BlogCard 
                            blog={blog}
                            user={user}
                            key={blog.id}
                        />
                    
                        <BlogModal
                            blog={XBlogModal}
                            handleClose={handleClose}
                            show={show}
                        />
                        
                        </div>
                        </div>
                    ))}
                </>
                :
                <h1>Loading...</h1>
            }
            
        </>
     );
}
 
export default Blogs;