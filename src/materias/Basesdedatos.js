import React from "react";
import { NavLink } from 'react-router-dom';

const Basesdedatos = (props) => {
    return(
        <div className="materias">
        <div className="cajamaterias" ><NavLink to='/materias' className='atras_materias'> Atrás </NavLink></div>
        <p>
            Bases de datos
        </p>
        <div className="cajamaterias">
        <iframe className="video_materias" width="560" height="315" src="https://www.youtube.com/embed/knVwokXITGI" ></iframe>
        </div>
        </div>
    );
}
export {Basesdedatos}