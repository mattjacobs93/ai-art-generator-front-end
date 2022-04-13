import  { useEffect, useState } from 'react'
import * as blogService from "../../services/blogService"
import { BlogCard } from './BlogCard'
// import { BlogModal } from './BlogModal'
import BlogModal from './BlogModal'

const Blogs = () => {
    const [blogs, setBlogs] = useState()
    const [show, setShow] = useState(false)
    const [XBlogModal, setXBlogModal] = useState(null)
    
    useEffect(()=>{
        if (!blogs) {
            blogService.getAll()
            .then(returnedBlogs => setBlogs(returnedBlogs))
        }
    },[blogs])

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
                        <div onClick={() => {
                            setXBlogModal(blog); 
                            handleShow();
                        }}>
        
                        <BlogCard 
                            blog={blog}
                            key={blog.id}
                        />
                    
                        <BlogModal
                            blog={XBlogModal}
                            handleClose={handleClose}
                            show={show}
                        />
                        
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