import React from 'react';

const PaginaHorarios = ({ horarios }) => {
  return (
    <div>
      <h1>Horarios de Materias</h1>
      {horarios.map((horario) => (
        <div key={horario.id} className="horario-item">
          <h2>ID de Materia: {horario.materia}</h2>
          <p>Horario: {horario.horario}</p>
          <p>Profesor: {horario.profesor}</p>
          <p>Estado: {horario.estado}</p>
        </div>
      ))}
    </div>
  );
};

export default PaginaHorarios;