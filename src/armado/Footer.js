import React from 'react';

const Footer = (props) =>{
    return(
        <div className="caja_general">
        <div className='Footer'>
            Designed by: Tomas Benitez

            <div> 
            <a href= 'https://www.linkedin.com/in/tomas-benitez-2a2a3118b/' 
            style={{ textDecoration: 'none', color: 'blue'}} target = '_BLANK' > LinkedIn </a>
            </div>
            
            <div> 
            <a href= 'https://expertobacktomasb.herokuapp.com/admin/login' style={{ textDecoration: 'none', color: 'blue'}} target = '_BLANK' > Node </a>
            </div>
            <div> 
            <a href= 'https://tomasbeniteztri.github.io/React/' 
            style={{ textDecoration: 'none', color: 'blue'}} target = '_BLANK' > React </a>
            </div>
            <div> 
            <a href= 'https://relatosdeportistas.000webhostapp.com/index.php' style={{ textDecoration: 'none', color: 'blue'}} target = '_BLANK' > PHP </a>
            </div>
            </div>

        </div>
    );
}
export {Footer};