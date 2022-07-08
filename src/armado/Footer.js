import React from 'react';

const Footer = (props) =>{
    return(
        <div className="caja_general">
        <div className='Footer'>
            Designed by: Tomas Benitez

            <div> 
            <a href= 'https://cafecito.app/tomasbenitez' style={{ textDecoration: 'none', color: 'blue'}} target = '_BLANK' className='back_icono' > <i class="fa-solid fa-hand-holding-dollar"></i>  </a>
            </div>
            <div className='iconos_footer'>
            <a href= 'https://www.linkedin.com/in/tomas-benitez-2a2a3118b/' 
            style={{ textDecoration: 'none', color: 'blue'}} target = '_BLANK' className='back_icon'> <i class="fa-brands fa-linkedin"></i></a>

            <a href= 'https://tomasbeniteztri.github.io/React/' 
            style={{ textDecoration: 'none', color: 'blue'}} target = '_BLANK' className='back_icon'> <i class="fa-brands fa-react"></i> </a>
 
            <a href= 'https://tomasbenitez.000webhostapp.com/' style={{ textDecoration: 'none', color: 'blue'}} target = '_BLANK' className='back_icon'> <i class="fa-brands fa-php"></i> </a>

            <a href= 'https://github.com/TomasBenitezTri' style={{ textDecoration: 'none', color: 'blue'}} target = '_BLANK' className='back_icon'> <i class="fa-brands fa-github"></i> </a>
            
            <a href= 'https://expertobacktomasb.herokuapp.com/admin/login' style={{ textDecoration: 'none', color: 'blue'}} target = '_BLANK' className='back_icon'> <i class="fa-brands fa-node"></i> </a>
            
            

            </div>
            </div>



        </div>
    );
}
export {Footer};