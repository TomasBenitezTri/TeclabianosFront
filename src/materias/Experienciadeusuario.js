import React from "react";
import { NavLink } from 'react-router-dom';

const Experienciadeusuario = (props) => {
    return(
        <div className="materias">
        <div className="cajamaterias" ><NavLink to='/materias' className='atras_materias'> Atrás </NavLink></div>
        <p>
            Experiencia de usuario
        </p>
        <div className="cajamaterias">
        <iframe className="video_materias" width="560" height="315" src="https://www.youtube.com/embed/sAZ2A1bztwQ" ></iframe>
        </div>
        </div>
    );
}
export {Experienciadeusuario}