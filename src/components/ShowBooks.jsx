import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

const url = 'https://api-sencilla-springboot-production.up.railway.app/api/v1/libros'

const ShowBooks = () => {
    const [books, setBooks] = useState([])
    
    useEffect( () => {
        getAllBooks()
    }, [])

    const getAllBooks = async () => {
  try {
    const response = await axios.get(url);
    let data = response.data;
    setBooks(data);
    console.log(data);
  } catch (error) {
    console.error("Error al obtener libros:", error);
  }
  
};

    const deleteBooks = async (id) => {
        await axios.delete(`${url}/${id}`)
        getAllBooks()
    }
    
  return (
    <div className="contenedor">
        <div>
            <NavLink to="/create"><button className="btn btn-primary">Create</button></NavLink>

        </div>
        {
            books.map(book => (
                <div key={book.id} className="card">
                    <h2 >{book.name}</h2>
                    <p>{book.gender}</p>
                    <NavLink to={`/edit/${book.id}`}><button>editar</button></NavLink>
                    <button onClick={() => deleteBooks(book.id)}>Eliminar</button>
                </div>
            ))
        }

    </div>
  )
}

export default ShowBooks