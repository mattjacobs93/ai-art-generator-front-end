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
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>Create Image</h2>
            </div>
            <div className={styles.body}>
                <form>
                    Content Image: <input id="content-image" type="file" onChange={handleChange} /> <br />
                    Style Image: <input id="style-image" type="file" onChange={handleChange} /> <br />
                    <button type="submit" onClick={handleSubmit}>submit</button>
                </form>
            </div>
        </div>
        </>
     );
}
 
export default CreateImage;