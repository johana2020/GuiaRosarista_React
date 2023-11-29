import React, { useState } from 'react';
import './eliminar.css';
import NavBar from '../../../componentes/NavBar/navbar';
import Header from '../../../componentes/Header/header';

const FormularioEliminacion = () => {
  const [materia, setMateria] = useState('');
  const [estado, setEstado] = useState('activo');

  const handleEliminacion = () => {
    // Lógica para eliminar el horario
    alert(`Horario con ID  ${materia} fue eliminado exitosamente`);
  };

  return (
    <>
    <Header/>
    <NavBar/>
    <form className="formulario">
      <div className="grupo-form">
        <label htmlFor="materia">ID de la materia:</label>
        <input
          type="text"
          id="materia"
          name="materia"
          value={materia}
          onChange={(e) => setMateria(e.target.value)}
          required
        />
      </div>

      <div className="grupo-form">
        <label htmlFor="estado">Estado:</label>
        <select
          id="estado"
          name="estado"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
          required
        >
          <option value="activo">Activo</option>
          <option value="inactivo">Inactivo</option>
        </select>
      </div>

      <div className="grupo-form">
        <button type="button" onClick={handleEliminacion}>
          Eliminar Materia
        </button>
      </div>
    </form>
    </>
  );
};

export default FormularioEliminacion;