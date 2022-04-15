import { useNavigate, useLocation } from "react-router-dom"
import { useRef, useState, useEffect } from 'react'
// import { createBlog } from "../../services/blogService"
import * as blogService from "../../services/blogService"
import blogStyle from './Blogs.module.css'

const BlogsNew = (props) => {

  const [formData, setFormData] = useState({
    caption: "",
    artworkLink: "", 
    contentLink: "", 
    styleLink: "" 
  })

  const [alreadySubmitted, setAlreadySubmitted] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  let { art } = location.state

  useEffect(()=>{
    let { art } = location.state
    console.log('art links: ', art.artworkLink, art.contentLink, art.styleLink)
    setFormData({...formData, artworkLink: art?.artworkLink, contentLink: art?.contentLink, styleLink: art?.styleLink})
  },[])


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
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!alreadySubmitted) {
      setAlreadySubmitted(true)
      blogService.createBlog(formData)
      .then(()=>navigate('/blogs'))
    }

    //const postFormData = new FormData()
    //postFormData.append('caption', formData.caption)
    // postFormData.append('images', formData.artworkLink????)

    // formElement.current.value = ''
    
  }

  return (
    // <div>
      
    //   <img
    //     src = {art?.artworkLink}
    //     alt = 'generated img'
    //   />
    //   {/* caption */}
    //   <form action="" ref={formElement} onSubmit={handleSubmit} method="POST" >
    //     <textarea 
    //       name="caption" 
    //       cols="30" 
    //       rows="10"
    //       maxLength='1000'
    //       placeholder=" Write a caption..."
    //       onChange={handleChange} 
    //     ></textarea>
    //     <button type="submit">SHARE BLOG</button>
    //   </form>
    // </div>
    <div className={blogStyle.container}>
      <div className={blogStyle.imgContainer}>
        <div className={blogStyle.artwork}>
          <img
          src = {art?.artworkLink}
          alt = 'generated img'
        />
        </div>
        <div className={blogStyle.contentStyle}>
          <img
            src = {art?.contentLink}
            alt = 'content img'

          />
            <img
            src = {art?.styleLink}
            alt = 'style img'
          />
        </div>
      </div>
      <div className={blogStyle.textArea}>
        <form action="" ref={formElement} onSubmit={handleSubmit} method="POST" >
          <textarea 
            name="caption" 
            cols="30" 
            rows="10"
            maxLength='1000'
            placeholder=" Write a caption..."
            onChange={handleChange} 
          ></textarea>
          <button type="submit">SHARE BLOG</button>
        </form>
      </div>
    </div>
  )
}

export default BlogsNew