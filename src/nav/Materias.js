import {React, useState, useEffect} from "react";
import { NavLink } from 'react-router-dom';
import axios from 'axios'


const Materias = (props) => {
    return(

        <div className='materias'>
            <div className='cajamaterias'> <NavLink to='/materias/bd' className='caja_materias'> Bases de datos </NavLink> </div>
            <div className='cajamaterias'> <NavLink to='/materias/ux' className='caja_materias'> Experiencia de usuario </NavLink> </div>
            <div className='cajamaterias'> <NavLink to='/materias/log' className='caja_materias'> Lógica de programación </NavLink> </div>
        </div>

    );
}

const URI = 'https://backend-teclabianos.herokuapp.com/'

const Foro = () => {
    const [loading, setLoading] = useState([false]);
    const [blogs, setBlog] = useState([]);

    useEffect( ()=>{
        const cargarBlog = async () => {
            setLoading(true)
            
            const res = await axios.get(URI)
            setBlog(res.data)

            setLoading(false)
        };
        cargarBlog();
    },[]);

    return(
        <div className='foro'>
        <p>Comentarios</p>
        <table className='tabla'>
                {loading?( <p className='fallback'>Cargando foro 
                
                <div class="carga">
                    <div class="bola"></div>
                    <div class="bola"></div>
                    <div class="bola"></div>
                    <div class="bola"></div>
                    <div class="bola"></div>
                </div>

                </p> ) : ( 
                    blogs.map ( (blog) => (
                        <div key={blog.id} className='nombre_comentario2'>
                            <div className='comentario'>
                                <div className='usuario_foro'>
                                    <i class="fa-solid fa-masks-theater"></i> {blog.title}
                                </div>
                                <ol class="chat">
                                    <li class="other">
                                        <div class="avatar"> </div>
                                            <div class="msg">
                                            
                                            <p className='p_comentario'>{blog.content}</p>
                                            
                                            <time>{blog.createdAt}</time>
                                        </div>
                                    </li>
                                </ol>
                            </div>  
                        </div>
                    ) ) ) 
                }
        </table>
        <div className='caja_boton_foro'>
        <NavLink to="/create" className='boton_comentar'>Comentar</NavLink> 
        </div>
        </div>
    )
}



export {Materias, Foro}