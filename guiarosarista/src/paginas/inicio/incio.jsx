import styles from '../inicio/inicio.css'
import profesores from '../inicio/Profesores.jpg'
import materias from '../inicio/Materias.jpg'
import horario from '../inicio/Horario.jpg'
import repositorio from '../inicio/Repositorio.jpg'

const Inicio = ()=>{
    return (

<div>

    <div class="profesor">
      <a href="./Views/Profesor.html">
      <img src={profesores}/></a>     
    </div>

    <div class="materias">
      <a href="./Views/Materias.html">
      <img src={materias}/></a>
    </div>

    <div class="horario">
      <a href="./Views/Horario.html">
      <img src={horario}/></a>
    </div>

    <div class="repositorio">  
      <a href="./Views/Repositorio.html">
      <img src={repositorio}/></a>
    </div>

  </div>
 )
};
 export default Inicio;

