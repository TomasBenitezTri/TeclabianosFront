import React from "react";
import { NavLink } from 'react-router-dom';


const Materias = (props) => {
    return(

        <div className='materias'>
            <div className='cajamaterias'> <NavLink to='/materias/bd' className='caja_materias'> Bases de datos </NavLink> </div>
            <div className='cajamaterias'> <NavLink to='/materias/ux' className='caja_materias'> Experiencia de usuario </NavLink> </div>
        </div>

    );
}

export {Materias}