import React from "react";
import { NavLink } from 'react-router-dom';

const Logica = (props) => {
    return(
        <div className="materias">
        <div className="cajamaterias" ><NavLink to='/materias' className='atras_materias'> Atrás </NavLink></div>
        <p>
            Lógica de programación
        </p>
        <div className="cajamaterias">
        <iframe className="video_materias" width="560" height="315" src="https://www.youtube.com/embed/as1opL254NA" ></iframe>
        </div>
        </div>
    );
}
export {Logica}
