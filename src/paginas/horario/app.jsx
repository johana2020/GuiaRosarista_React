import React from 'react';
import PaginaHorarios from './ini_hr';
import Header from '../../componentes/Header/header';
import NavBar from '../../componentes/NavBar/navbar';
import './Estilos.css'; // Asegúrate de tener tus estilos

const App = () => {
  // Supongamos que tienes una lista de horarios como la siguiente:
  const horarios = [
    { id: 1, materia: 'Materia1', horario: 'Mañana', profesor: 'Profesor1', estado: 'activo' },
    { id: 2, materia: 'Materia2', horario: 'Tarde', profesor: 'Profesor2', estado: 'activo' },
    // Otros horarios...
  ];

  return (
    <>
    <Header/>
    <NavBar/>
    <div className="app-container">
      <PaginaHorarios horarios={horarios} />
    </div>
    </>
  );
};

export default App;