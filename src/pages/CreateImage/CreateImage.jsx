import { useState, useEffect } from "react";
import * as artworkService from '../../services/artworkService.js'


const CreateImage = () => {
    const [formData, setFormData] = useState({})

    const handleChange = (e) => {
       // console.log(e.target.files[0])
       setFormData({...formData, [e.target.id] : e.target.files[0]})
    }

    useEffect(()=>{
        console.log(formData)
    },[formData])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('sanity check - submit pressed', formData)
        let toSend = new FormData()
        toSend.append('content-image', formData['content-image'])
        toSend.append('style-image', formData['style-image'])

        for (let entries of toSend.entries()) {
            console.log('my entry: ', entries)
        }

        artworkService.create(toSend)

    }

    return ( 
        <>
            <h1>Sanity Check</h1>
            <form>
                Content Image: <input id="content-image" type="file" onChange={handleChange} /> <br />
                Style Image: <input id="style-image" type="file" onChange={handleChange} /> <br />
                <button type="submit" onClick={handleSubmit}>submit</button>
            </form>
        </>
     );
}
 
export default CreateImage;