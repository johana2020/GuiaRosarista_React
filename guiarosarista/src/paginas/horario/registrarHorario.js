import React, { useState } from 'react';
import './formulario.css';
import NavBar from '../../componentes/NavBar/navbar';
import Header from '../../componentes/Header/header';

const Formulario = () => {
  const [materia, setMateria] = useState('');
  const [horario, setHorario] = useState('10:00');
  const [profesor, setProfesor] = useState('Profesor 1');

  const handleRegistro = () => {
    // Aquí puedes agregar la lógica para manejar el registro del horario.
    // Por ejemplo, enviar los datos a un servidor.
    alert('Horario registrado exitosamente');
  };

  return (
    <>
    <Header/>
    <NavBar/>
    <div className="container">
      <form id="registroForm">
        <div className="form-group">
          <label htmlFor="materia">ID de Materia:</label>
          <input
            type="text"
            id="materia"
            name="materia"
            value={materia}
            onChange={(e) => setMateria(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="horario">Horario:</label>
          <select
            id="horario"
            name="horario"
            value={horario}
            onChange={(e) => setHorario(e.target.value)}
            required
          >
            <option value="1000">10:00</option>
            <option value="1200">12:00</option>
            <option value="1500">15:00</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="profesor">Profesor:</label>
          <select
            id="profesor"
            name="profesor"
            value={profesor}
            onChange={(e) => setProfesor(e.target.value)}
            required
          >
            <option value="Profesor 1">Profesor 1</option>
            <option value="Profesor 2">Profesor 2</option>
            <option value="Profesor 3">Profesor 3</option>
          </select>
        </div>

        <div className="form-group">
          <button type="button" onClick={handleRegistro}>
            Registrar Materia
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default Formulario;