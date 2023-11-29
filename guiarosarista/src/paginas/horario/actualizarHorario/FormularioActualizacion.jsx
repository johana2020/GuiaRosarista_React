// FormularioActualizacion.jsx
import React, { useState } from 'react';
import './actualizacion.css';

const FormularioActualizacion = () => {
  const [materia, setMateria] = useState('');
  const [horario, setHorario] = useState('10:00');
  const [profesor, setProfesor] = useState('Profesor 1');

  const handleActualizacion = () => {
    // Lógica para actualizar el horario
    alert('Horario actualizado exitosamente');
  };

  return (
    <form className="formulario">
      <div className="grupo-form">
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

      <div className="grupo-form">
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

      <div className="grupo-form">
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

      <div className="grupo-form">
        <button type="button" onClick={handleActualizacion}>
          Actualizar Horario
        </button>
      </div>
    </form>
  );
};

export default FormularioActualizacion;