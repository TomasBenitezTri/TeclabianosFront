import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom';



const URI = 'http://localhost:8000/blogs/'

const CrearComentario = () => {
    const [title, setTitle] = useState ('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {title: title, content: content})
        navigate('/foro')
    }
    
    return(
        <div className='CrearComentario'>
        <div className="cajamaterias" ><NavLink to='/foro' className='atras_materias'> Atrás </NavLink></div>
            <form onSubmit={store} className='formulario_crear_comentario'>
            <div className='caja_nombre_crear_comentario'>
            <div className='letras_crear_formulario'>Nombre</div>
            <textarea
                value={title}
                onChange={ (e)=> setTitle(e.target.value) }
                type="text"
                className='textarea_formulario_nombre'
            /></div>
            <div className='caja_comentario_crear_comentario'>
            <div className='letras_crear_formulario'>Comentario</div>
            <textarea
                value={content}
                onChange={ (e)=> setContent(e.target.value) }
                type="text"
                className='textarea_formulario'
            /></div>
            <button type='submit' className='boton_crear_comentario'>Enviar</button>
            </form>
        </div>
    )
}

export {CrearComentario}