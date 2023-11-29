import React from 'react';
import '../horario/esti_hr.css';
import React, { useState } from 'react';
import { BrowserRouter, Link } from "react-router-dom";
import Header from '../../componentes/header/header';


const Horario = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>  

    <div className="contenedor-flex">
      <button className="boton">Botón 1</button>
      <button className="boton">Botón 2</button>
      <button className="boton">Botón 3</button>
      <button className="boton">Botón 4</button>
    </div>
    </BrowserRouter>
    </>
  );
};

export default Horario;
