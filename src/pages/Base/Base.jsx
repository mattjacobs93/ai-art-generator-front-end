import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


const Base = () => {

  const navigate = useNavigate()

  useEffect(()=>{
    navigate('/login')
  },[])
  return (
    <>
    </>
  )
}

export default Base