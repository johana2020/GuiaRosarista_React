// import './materias.css';
import { Link } from "react-router-dom";
import NavBar from "../../../componentes/NavBar/navbar";
import Header from "../../../componentes/Header/header";


function Materias() {
  return (
    <>
    <Header/>
    <NavBar/>
    <div>
        <div class = "Box"> 
            <div class="box1">
                <div class="boox1">
                    <h1> 0123456 - CÁLCULO 1</h1>
                </div>
                <div class="boox1">
                    <p> Escuela de Ingeniería Ciencia y Tecnología</p>
                </div>
                <div class="boox1">
                    <p> Segundo semestre (2 Créditos) </p> 
                </div>
            </div>

            <div class="box1"> 
                <div class="boox1">
                    <p> Profesores que la dictan: </p> 
                    <ul> 
                    <li> Profesor1</li>
                    <li> Profesor2</li>
                    <li> Profesor3</li>
                    <li> Profesor4</li>
                    </ul>
                </div>
            </div>

            <div class ="box2">
                <div class="boox2">
                    <h1>Repositorios de Cálculo 1</h1>
                    <ul> <p> Guia de Asignatura </p>
                    <li> Guia-Calculo1.pdf </li>
                    </ul>
                    <ul> <p>Talleres</p>
                    <li>Taller_calculo1_corte2.pdf</li>
                    <li> Taller_calculo1_corte1.pdf</li>
                    </ul>
                    <ul> <p>Quices</p>
                    <li>Quiz_calculo1_corte1.pdf</li>
                    <li> Quiz_calculo1_corte2.pdf</li>
                    </ul>
                    <ul> <p>Parciales</p>
                    <li>Parcial_calculo1_corte1.pdf</li>
                    <li> Parcial_calculo1_corte2.pdf</li>
                    </ul>
                </div><br></br>
                <h1><div class="botonS"><Link to="./review" target="_blank">Ver más</Link></div></h1>
            </div>
        </div>    
        <h1>
            <div class="botonS" ><a href="EditarProfesor.html" target="_blank">Editar</a></div>
            <div class="botonS" ><a href="EliminarProfesor.html" target="_blank">Eliminar</a></div>
            <br></br><br></br>
        </h1>
    </div>
    </>
  );
}

export default Materias;