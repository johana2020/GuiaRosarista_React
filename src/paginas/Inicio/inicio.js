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
  <Link to="./materias">
  <img src={Materia}/>
  </Link>
</div>

<div class="horario">
  <Link to="./horario">
  <img src={Horario}/>
  </Link>
</div>

<div class="repositorio">  
  <Link to="./repositorio">
  <img src={Repo} />
  </Link>
</div>

</div>

    </div>
    </>
  );
}

export default Inicio;