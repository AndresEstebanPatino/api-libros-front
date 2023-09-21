import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const url = 'https://api-sencilla-springboot-production.up.railway.app/api/v1/libros/'

const EditCharacter = () => {

    const [nombre, setNombre] = useState("")
    const [autor, setAutor] = useState("")
    const [gender, setGender] = useState("")
    const navigate = useNavigate()
    const {id} = useParams()


    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${url}${id}`, {
            name: nombre,
            autor: autor,
            gender: gender
        })
        navigate("/")
    }
    
    useEffect( () => {
        const getCharactersById = async () => {
            const response = await axios.get(`${url}${id}`)
            setNombre(response.data.name)
            setAutor(response.data.autor)
            setGender(response.data.gender)
        }
        getCharactersById()

    }, [id])

  return (
    <div>
    <h3>Edit</h3>
    <form onSubmit={update}>
        <div className='mb-3'>
            <label className='form-label'>nombre</label>
            <input type="text" 
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            />
        </div>
        <div className='mb-3'>
            <label className='form-label'>autor</label>
            <input type="text"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
            />
        </div>
        <div className='mb-3'>
            <label className='form-label'>descripción</label>
            <textarea type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            />
        </div>
        <button type="submit">Editar</button>
    </form>
</div>
  )
}

export default EditCharacter