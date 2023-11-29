import { Link } from "react-router-dom";
import NavBar from "../../../componentes/NavBar/navbar";
import Header from "../../../componentes/Header/header";
import '../../Repositorio/repositorio.css'
// import descarga from './quiz.txt'
function Materias() {
  return (
    <>
    <Header/>
    <NavBar/>
    <div class="repositorio">
        <div class="box">
            <h1>Repositorio de Materia1.</h1>
        </div>
        <div class="box" >
            <div class="Interbox" >
                <div class="guia">
                    <ul><li>Guía_Asignatura.pdf</li></ul>
                </div>
                <div class="left">
                <ul>
                    <h1>Parciales</h1>
                    <li>2023-2_1.pdf</li>
                    <li>Materia 02.pdf</li>
                    <li>Materia 03.pdf</li>
                    <li>Materia 04.pdf</li>                
                    <li>Materia 05.pdf</li>
                    <li>Materia 06.pdf</li>
                    <li>Materia 07.pdf</li>
                    <li>Materia 08.pdf</li>                
                    <li>Materia 09.pdf</li>
                    <li>Materia 10.pdf</li>
                    <li>Materia 11.pdf</li>
                    <li>Materia 12.pdf</li>
                </ul>
                </div>
                <div class="center">
                <ul>
                    <h1>Talleres</h1>
                    <Link to="../Materias/Materia1/repositorio"><li>Materia 1</li></Link>
                    <li><a href="Profesor1.html">Materia 02</a></li>
                    <li><a href="Profesor1.html">Materia 03</a></li>
                    <li><a href="Profesor1.html">Materia 04</a></li>                
                    <li><a href="Profesor1.html">Materia 05</a></li>
                    <li><a href="Profesor1.html">Materia 06</a></li>
                    <li><a href="Profesor1.html">Materia 07</a></li>
                    <li><a href="Profesor1.html">Materia 08</a></li>                
                    <li><a href="Profesor1.html">Materia 09</a></li>
                    <li><a href="Profesor1.html">Materia 10</a></li>
                    <li><a href="Profesor1.html">Materia 11</a></li>
                    <li><a href="Profesor1.html">Materia 12</a></li>
                </ul>
                </div>
                <div class="right">
                <ul>
                    <h1>Quices</h1>
                    {/* <li><a href={descarga} download="Materia1_Quiz_2023-1_1.txt">Materia 13</a></li> */}
                    <li><a href="Profesor1.html">Materia 14</a></li>
                    <li><a href="Profesor1.html">Materia 15</a></li>
                    <li><a href="Profesor1.html">Materia 16</a></li>
                    <li><a href="Profesor1.html">Materia 17</a></li>
                    <li><a href="Profesor1.html">Materia 18</a></li>
                    <li><a href="Profesor1.html">Materia 19</a></li>
                    <li><a href="Profesor1.html">Materia 20</a></li>
                    <li><a href="Profesor1.html">Materia 21</a></li>
                    <li><a href="Profesor1.html">Materia 22</a></li>
                </ul>
                </div>
                
            </div>
        <h1><div class="botonS"><Link to="./Profesor1" target="_blank">Agregar contenido</Link></div></h1>
        
    </div>

    </div>
    </>
  );
}

export default Materias;