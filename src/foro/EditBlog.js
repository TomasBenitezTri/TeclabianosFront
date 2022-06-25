import axios from "axios";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom"

const URI = 'http://localhost:8000/blogs/'

const CompEditBlog = () => {
    const [title, setTitle] = useState ('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()
    const id = useParams()
    const update = async (e) => {
        await axios.put(URI+id, {
            title: title,
            content: content
        })
        navigate ('/foro')
    }
    useEffect( ()=> {
        getBlogById()
    },[])
        
    const getBlogById = async ()=> {
        const res = await axios.get(URI+id)
        setTitle(res.data.title)
        setContent(res.data.content)
    }
    return(
        <div className='editar_comentario'>
            <form onSubmit={update}>
            <div>
            <label>Nombre</label>
            <input
                value={title}
                onChange={ (e)=> setTitle(e.target.value) }
                type="text"
                className='input_formulario'
            /></div>
            <div>
            <label>Comentario</label>
            <textarea
                value={content}
                onChange={ (e)=> setContent(e.target.value) }
                type="text"
                className='input_formulario'
            /></div>
            <button type='submit'>Editar</button>
            </form>
        </div>
    )

}
export {CompEditBlog}