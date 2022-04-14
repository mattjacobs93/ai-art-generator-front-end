import { useNavigate, useLocation } from "react-router-dom"
import { useRef, useState, useEffect } from 'react'
// import { createBlog } from "../../services/blogService"
import * as blogService from "../../services/blogService"
import blogStyle from './Blogs.module.css'

const BlogsEdit = (props) => {

  const [formData, setFormData] = useState({
    caption: "",
    artworkLink: "", 
    contentLink: "", 
    styleLink: "" 
  })

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(()=>{
  let {blog} = location.state
  setFormData({...formData, artworkLink: blog.artworkLink, contentLink: blog.contentLink, styleLink: blog.styleLink})    
  },[])
  let {blog} = location.state
  console.log(blog)

  // useEffect(()=>{
  //   let { art } = location.state
  //   console.log('art links: ', art.artworkLink, art.contentLink, art.styleLink)
  //   setFormData({...formData, artworkLink: art?.artworkLink, contentLink: art?.contentLink, styleLink: art?.styleLink})
  // },[])


  console.log('location: ', location)
  // const { art } = location.state
  // console.log('art links: ', art.artworkLink, art.contentLink, art.styleLink)
  // setFormData({...formData, artworkLink: art?.artworkLink, contentLink: art?.contentLink, styleLink: art?.styleLink})
  const formElement = useRef()
  
  // useEffect(()=>{
  //   setFormData({...formData, artworkLink: art?.artworkLink, contentLink: art?.contentLink, styleLink: art?.styleLink})
  //   },[art])

  let char = 0
  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
    char= (evt.target.value)
    console.log(formData)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let blogID = blog.id
    blogService.update(formData, blogID)
    .then(()=>navigate('/blogs'))
    //const postFormData = new FormData()
    //postFormData.append('caption', formData.caption)
    // postFormData.append('images', formData.artworkLink????)

    // formElement.current.value = ''
  }

  return (
    <div className={blogStyle.container}>
      <div className={blogStyle.imgContainer}>
        <div className={blogStyle.contentStyle}>
          <img
            src = {blog?.contentLink}
            alt = 'content img'

          />
            <img
            src = {blog?.styleLink}
            alt = 'style img'
          />
        </div>
        <div className={blogStyle.artwork}>
          <img
          src = {blog?.artworkLink}
          alt = 'generated img'
        />
        </div>
      </div>
      <div className={blogStyle.textArea}>
        <form action="" ref={formElement} onSubmit={handleSubmit} method="POST">
          <textarea 
            name="caption" 
            cols="30" 
            rows="10"
            maxLength='1000'
            onChange={handleChange} 
          >{blog?.caption}</textarea>
          <button type="submit">Edit Caption</button>
        </form>
      </div>
    </div>
  )
}

export default BlogsEdit