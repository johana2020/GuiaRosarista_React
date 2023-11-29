// Pagina.jsx
import React, { useState } from 'react';
import FormularioRegistro from './FormularioRegistro';
import FormularioActualizacion from './FormularioActualizacion';
import './actualizacion.css';
import Header from '../../../componentes/Header/header';
import NavBar from '../../../componentes/NavBar/navbar';

const Pagina = () => {
  return (
    <>
    <Header/>
    <NavBar/>
    <div className="contenedor">
      <h1>Información actual</h1>
      <FormularioRegistro />

      <h1>Información actualizada</h1>
      <FormularioActualizacion />
    </div>
    </>
  );
};

export default Pagina;