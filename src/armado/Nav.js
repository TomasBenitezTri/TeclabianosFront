import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) =>{
    return(
        <div className="caja_general">
        <div className='Nav'>
            <div className='cajanav'> <NavLink to='/' className='cajanavlink'> Home </NavLink> </div>
            <div className='cajanav'> <NavLink to='/materias' className='cajanavlink'> Materias </NavLink> </div>
            <div className='cajanav'> <NavLink to='/foro' className='cajanavlink'> Foro </NavLink> </div>
        </div> 
        </div>
    );
}
export {Nav};