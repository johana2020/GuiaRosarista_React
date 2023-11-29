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
                    <h1> 11310021 - Análisis Num y Comp. Científica</h1>
                </div>
                <div class="boox1">
                    <p> Escuela de Ingeniería Ciencia y Tecnología</p>
                </div>
                <div class="boox1">
                    <p> Cuarto semestre (2 Créditos) </p> 
                </div>
            </div>

            <div class="box1"> 
                <div class="boox1">
                    <p> Profesores que la dictan: </p> 
                    <ul> 
                    <Link to='../../Profesor/JoseGuerrero'><li>Jose Alejandro Guerrero</li></Link>
                    </ul>
                </div>
            </div>

            <div class ="box2">
                <div class="boox2">
                    <h1>Repositorios de Análisis Num y Comp. Científica</h1>
                    <ul> <p> Guia de Asignatura </p>
                    <li> Guia_Asignatura.pdf </li>
                    </ul>
                    <ul> <p>Talleres</p>
                    <li> Taller_corte1.pdf</li>
                    <li> Taller_corte2.pdf</li>
                    </ul>
                    <ul> <p>Quices</p>
                    <li> Quiz_corte1.pdf</li>
                    <li> Quiz_corte2.pdf</li>
                    </ul>
                    <ul> <p>Parciales</p>
                    <li> Parcial_corte1.pdf</li>
                    <li> Parcial_corte2.pdf</li>
                    <li> Parcial_corte3.pdf</li>
                    </ul>
                </div>
                <h1><div class="botonS"><Link to="./repositorio" target="_blank">Ver más</Link></div></h1>
            </div>
        </div>    
        <h1>
            <div class="botonS" ><Link to ="../editar">Editar</Link></div>
            <div class="botonS" ><Link to ="../eliminar">Eliminar</Link></div>
            <br></br><br></br>
        </h1>
    </div>
    </>
  );
}

export default Materias;