import { useState, useEffect } from "react";
import * as artworkService from '../../services/artworkService.js'
import { useNavigate } from "react-router-dom";
import styles from './CreateImage.module.css'


const CreateImage = () => {
    const [formData, setFormData] = useState({})
    const navigate = useNavigate()

    const [imgFile, uploadImg] = useState(null)
    const [imgFile2, uploadImg2] = useState(null)

    const [alreadySubmitted, setAlreadySubmitted] = useState(false)

    const handleChange1 = (e) => {
        setFormData({...formData, [e.target.id] : e.target.files[0]})
        uploadImg(URL.createObjectURL(e.target.files[0]))
     }
 

    const handleChange2 = (e) => {
        setFormData({...formData, [e.target.id] : e.target.files[0]})
        uploadImg2(URL.createObjectURL(e.target.files[0]))
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

        if (!alreadySubmitted && imgFile && imgFile2) {
            setAlreadySubmitted(true)
            let returnedFromCreate = await artworkService.create(toSend)
            console.log(returnedFromCreate)
            navigate('/profile')
        }
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
                            onChange={handleChange1} 
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
                            onChange={handleChange2} 
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