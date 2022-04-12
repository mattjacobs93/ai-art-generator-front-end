import { useNavigate, useLocation } from "react-router-dom"
import { useRef, useState, useEffect } from 'react'
// import { createBlog } from "../../services/blogService"
import * as blogService from "../../services/blogService"

const BlogsNew = (props) => {

  const [formData, setFormData] = useState({
    caption: "",
    artworkLink: "", 
    contentLink: "", 
    styleLink: "" 
  })

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

    blogService.createBlog(formData)
    //const postFormData = new FormData()
    //postFormData.append('caption', formData.caption)
    // postFormData.append('images', formData.artworkLink????)

    // formElement.current.value = ''
    navigate('/blogs')
  }

  return (
    <div>
      {/* <h1>Sanity Check New Blog</h1> */}
      <img
        src = {art?.artworkLink}
        alt = 'generated img'
      />
      {/* caption */}
      <form action="" ref={formElement} onSubmit={handleSubmit} method="POST">
        <textarea 
          name="caption" 
          cols="30" 
          rows="10"
          maxLength='1000'
          onChange={handleChange} 
        ></textarea>
        <button type="submit">SHARE BLOG</button>
      </form>
    </div>
  )
}

export default BlogsNew