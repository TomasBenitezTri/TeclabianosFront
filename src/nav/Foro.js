import axios from 'axios'
import { React, useState, useEffect } from 'react'
import {NavLink} from 'react-router-dom'

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

    {/*}
    const getBlogs = async () => {

        const res = await axios.get(URI)
        setBlog(res.data)
    
    */}
    
    {/*const deleteBlog = async (id) => {
        await axios.delete(`${URI}${id}`)
        getBlogs()
    */}

    return(
        <div className='foro'>

        <table className='tabla'>
            {/*<thead>
                <tr className='nombre_comentario'>
                    <th>Nombre</th>
                    <th>Comentario</th>
                    <th>Actions</th>
                </tr>
            </thead>*/}
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
                                <div className='usuario_foro'><i class="fa-solid fa-masks-theater"></i> {blog.title}</div>
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
                            {/*<th></th>*/}
                            {/*<td>
                            <NavLink to={`/edit/${blog.id}`}>Edit</NavLink>
                            <button onClick={()=> deleteBlog(blog.id)}>Delete</button>
                            </td>*/}
                        </div>
                    ) ) )
                }
        </table>
        <NavLink to="/create" className='boton_comentar'>Comentar</NavLink>
        </div>
    )
}
export {Foro}

