import { useState, useEffect } from "react";
import * as artworkService from '../../services/artworkService.js'
import { useNavigate } from "react-router-dom";
import styles from './createImage.module.css'


const CreateImage = () => {
    const [formData, setFormData] = useState({})
    const navigate = useNavigate()

    const handleChange = (e) => {
       // console.log(e.target.files[0])
       setFormData({...formData, [e.target.id] : e.target.files[0]})
    }

    useEffect(()=>{
        console.log(formData)
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
                       <div className={styles.contentImage}>
                           <h3>
                               Content Image: 
                           </h3>
                        <input id="content-image" type="file" onChange={handleChange} /> <br />
                    </div>
                    <div className={styles.styleImage}>
                         <h3>Style Image:</h3> <input id="style-image" type="file" onChange={handleChange} /> <br />
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