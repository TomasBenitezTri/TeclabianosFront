import {React} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import {Basesdedatos} from './materias/Basesdedatos';
import {Experienciadeusuario} from './materias/Experienciadeusuario';
import {Logica} from './materias/Logica';

import {Header} from './armado/Header';
import {Nav} from './armado/Nav';
import {Home} from './nav/Home';

import {Materias, Foro} from './nav/Materias';

import {Footer} from './armado/Footer';
import {CrearComentario} from './foro/CrearComentario';
import {Commentario} from './giscus/giscus';
import {Commentario1} from './nav/Foro';

function App() {
  return (
    <Router>
      <Header/>
      <Nav/>
      <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/materias' element = {<Materias/>}/>
          <Route path='/foro' element = {<Commentario1/>}/>

          {/*Rutas de las materias*/}
          <Route path='/materias/ux' element = {<Experienciadeusuario/>} />
          <Route path='/materias/bd' element = {<Basesdedatos/>}/>
          <Route path='/materias/log' element = {<Logica/>}/>

          {/* Rutas Foro */}
          <Route path='/create' element = {<CrearComentario/>}/>
          <Route path='/giscus' element = {<Commentario/>}/>
      </Routes>
      <Routes>
        <Route path='/materias' element = {<Foro/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
