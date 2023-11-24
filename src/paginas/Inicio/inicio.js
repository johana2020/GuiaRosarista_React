import './inicio.css';
import Profesor from './Profesores.jpg';
import Repo from './Repositorio.jpg';
import Materia from './Materias.jpg';
import Horario from './Horario.jpg';


function Inicio() {
  return (
    <div>
        <div class="Inicio">

<div class="profesor">
  <a href="./Views/Profesor.html">
  <img src={Profesor}/>
  </a>
</div>

<div class="materias">
  <a href="./Views/Materias.html">
  <img src={Materia}/>
  </a>
</div>

<div class="horario">
  <a href="./Views/Horario.html">
  <img src={Horario}/>
  </a>
</div>

<div class="repositorio">  
  <a href="./Views/Repositorio.html">
  <img src={Repo} />
  </a>
</div>

</div>

    </div>
  );
}

export default Inicio;