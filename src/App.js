import {React} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import {Basesdedatos} from './materias/Basesdedatos';
import {Experienciadeusuario} from './materias/Experienciadeusuario';
import {Logica} from './materias/Logica';

import {Header} from './armado/Header';
import {Nav} from './armado/Nav';
import {Home} from './nav/Home';

import {Materias} from './nav/Materias';
import {Footer} from './armado/Footer';
import {CrearComentario} from './foro/CrearComentario';
import {Foro} from './nav/Foro';
import {Commentario} from './giscus/giscus';

function App() {
  return (
    <Router>
      <Header/>
      <Nav/>
      <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/materias' element = {<Materias/>}/>
          <Route path='/foro' element = {<Foro/>}/>
          
          {/*Rutas de las materias*/}
          <Route path='/materias/ux' element = {<Experienciadeusuario/>} />
          <Route path='/materias/bd' element = {<Basesdedatos/>}/>
          <Route path='/materias/log' element = {<Logica/>}/>

          {/* Rutas Foro */}
          <Route path='/create' element = {<CrearComentario/>}/>
          <Route path='/giscus' element = {<Commentario/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
