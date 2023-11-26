import './inicio.css';
import Profesor from './Profesores.jpg';
import Repo from './Repositorio.jpg';
import Materia from './Materias.jpg';
import Horario from './Horario.jpg';
import { Link } from "react-router-dom";
import NavBar from '../../componentes/NavBar/navbar';
import Header from '../../componentes/Header/header';


function Inicio() {
  return (
    <>
    <Header/>
    <NavBar/>
    <div>
        <div class="Inicio">

<div class="profesor">
  <Link to="./profesor">
  <img src={Profesor}/>
  </Link>
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
    </>
  );
}

export default Inicio;