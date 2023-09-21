import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const url = 'https://api-sencilla-springboot-production.up.railway.app/api/v1/libros'

const CreateCharacter = () => {
    
    const [nombre, setNombre] = useState("")
    const [autor, setAutor] = useState("")
    const [gender, setGender] = useState("")
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault();
        await axios.post(url, {name: nombre, autor: autor, gender : gender})
        navigate("/")
    }   

  return (
    <div>
        <h3>Create</h3>
        <form onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'>nombre</label>
                <input 
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>autor</label>
                <input 
                    type="text"
                    value={autor}
                    onChange={(e) => setAutor(e.target.value)}
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>género</label>
                <textarea 
                    type="text"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                />
            </div>
            <button type="submit">Guardar</button>
        </form>
    </div>
  )
}

export default CreateCharacter;