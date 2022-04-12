import  { useEffect, useState } from 'react'
import * as blogService from "../../services/blogService"
import { BlogCard } from './BlogCard'

const Blogs = () => {
    const [blogs, setBlogs] = useState()
    
    useEffect(()=>{
        if (!blogs) {
            blogService.getAll()
            .then(returnedBlogs => setBlogs(returnedBlogs))
        }
    },[blogs])

    return ( 
        <>
            
            {
                blogs ?
                <>
                    {blogs.map(blog => (
                        <BlogCard 
                            blog={blog}
                            key={blog.id}
                        />
                    ))}
                </>
                :
                <h1>Loading...</h1>
            }
            
        </>
     );
}
 
export default Blogs;