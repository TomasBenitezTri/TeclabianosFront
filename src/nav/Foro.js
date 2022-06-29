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

    return(
        <div className='foro'>

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
        <NavLink to="/create" className='boton_comentar'>Comentar</NavLink> 
        <div className='face'>
        <div class="fb-comments" data-href="https://www.facebook.com/plugins/feedback.php?app_id=1030030761163201&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df152036081187b%26domain%3Dwww.c5n.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.c5n.com%252Ff2b92d540e424%26relation%3Dparent.parent&amp;color_scheme=dark&amp;container_width=660&amp;height=100&amp;href=https%3A%2F%2Fwww.c5n.com%2Fc18163&amp;locale=es_LA&amp;mobile=true&amp;numposts=5&amp;sdk=joey&amp;version=v9.0&amp;width" data-width="320px" data-numposts="5"></div>
        </div>
        </div>
    )
}
export {Foro}

