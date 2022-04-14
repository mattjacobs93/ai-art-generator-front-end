import { useState, useEffect } from "react";
import * as artworkService from '../../services/artworkService.js'
import { useNavigate } from "react-router-dom";
import styles from './CreateImage.module.css'


const CreateImage = () => {
    const [formData, setFormData] = useState({})
    const navigate = useNavigate()

    const [imgFile, uploadImg] = useState("")
    const [imgFile2, uploadImg2] = useState("")

    const handleChange = (e) => {
       setFormData({...formData, [e.target.id] : e.target.files[0]})

       console.log(e.target.files)
       let img1 = URL.createObjectURL(e.target.files[0])
       console.log(img1)
       let img2 = URL.createObjectURL(e.target.files[1])
       uploadImg({...img1}['blob'])
       uploadImg2({...img2}['blob'])
    }

    useEffect(()=>{
    },[formData])

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('sanity check - submit pressed', formData)
        let toSend = new FormData()
        toSend.append('content-image', formData['content-image'])
        toSend.append('style-image', formData['style-image'])

        for (let entries of toSend.entries()) {
            console.log('my entry: ', entries)
        }

        let returnedFromCreate = await artworkService.create(toSend)
        console.log(returnedFromCreate)
        navigate('/profile')

    }

    return ( 
        <>
        <div className={styles.recursiveContainer}>

        <div className={styles.container}>
            <div className={styles.header}>
                <h2>Utilize the power of artificial intelligence...</h2>
            </div>
            <div className={styles.body}>
                <form>
                    <div className={styles.imagesContainer}>
                       <div>
                           <h3>
                               Content Image: 
                           </h3>
                        <input 
                            id="content-image" 
                            type="file" 
                            onChange={handleChange} 
                            accept="image/png"
                        /> <br />
                           <div className={styles.contentImage}>
                        <div className={styles.contentPreview}>
                            <img 
                                src={imgFile}
                                alt="Content Preview" 
                                className={styles.contentPreviewImage}   
                            />
                           </div>
                        </div>
                    </div>
                    <div>
                         <h3>
                             Style Image:
                        </h3> 
                         <input 
                            id="style-image" 
                            type="file" 
                            onChange={handleChange} 
                        /> <br />
                    <div className={styles.styleImage}>
                        <div className={styles.stylePreview}>
                            <img 
                                src={imgFile2}
                                alt="Style Preview" 
                                className={styles.stylePreviewImage}   
                            />
                        </div>
                    </div>
                    </div> 
                    </div>
                    
                    <button type="submit" onClick={handleSubmit}>submit</button>
                    
                </form>
            </div>
        </div>
        </div>
        </>
     );
}
 
export default CreateImage;