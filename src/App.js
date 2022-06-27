import {React, lazy, Suspense} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import {Basesdedatos} from './materias/Basesdedatos';
import {Experienciadeusuario} from './materias/Experienciadeusuario';
import {Header} from './armado/Header';
import {Nav} from './armado/Nav';
import {Home} from './nav/Home';
import {Materias} from './nav/Materias';
import {Footer} from './armado/Footer';
import {CrearComentario} from './foro/CrearComentario';
import {CompEditBlog} from './foro/EditBlog';

/*import {Foro} from './nav/Foro';*/
const Foro = lazy(()=>import('./nav/Foro'));




function App() {
  return (
    <Router>
      <Header/>
      <Nav/>
      <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/materias' element = {<Materias/>}/>
          
          <Route 
          path='/foro' 
          element = {
          <Suspense fallback={<h1 className="fallback">Cargando foro...</h1>}>
            <Foro/>
          </Suspense>
          }/>
          
          
          {/*Rutas de las materias*/}
          <Route path='/materias/ux' element = {<Experienciadeusuario/>} />
          <Route path='/materias/bd' element = {<Basesdedatos/>}/>

          {/* Rutas Foro */}
          <Route path='/create' element = {<CrearComentario/>}/>
          <Route path='/edit/:id' element = {<CompEditBlog/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
