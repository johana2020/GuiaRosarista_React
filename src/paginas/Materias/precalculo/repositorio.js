import { Link } from "react-router-dom";
import NavBar from "../../../componentes/NavBar/navbar";
import Header from "../../../componentes/Header/header";
import '../../Repositorio/repositorio.css'
import descarga from './quiz.txt'
function Materias() {
  return (
    <>
    <Header/>
    <NavBar/>
    <div class="repositorio">
        <div class="box">
            <h1>Repositorio de Precalculo.</h1>
        </div>
        <div class="box" >
            <div class="Interbox" >
                <div class="guia">
                    <ul><li>Guía_Asignatura.pdf</li></ul>
                </div>
                <div class="left">
                <ul>
                    <h1>Parciales</h1>
                    <li><a href={descarga}download="Preparcial-2023-2_primerCorte">2023-2_1.pdf</a></li>
                    <li><a href={descarga}download="Preparcial-2023-2_segundoCorte">2023-2_2.pdf</a></li>
                    <li><a href={descarga}download="Preparcial-2023-2_tercerCorte">2023-2_3.pdf</a></li>
                    <li><a href={descarga}download="Preparcial-2023-2_final">2023-2_4.pdf</a></li>
                    <li><a href={descarga}download="Preparcial-2023-1_primerCorte">2023-1_1.pdf</a></li>
                    <li><a href={descarga}download="Preparcial-2023-1_segundoCorte">2023-1_2.pdf</a></li>
                    <li><a href={descarga}download="Preparcial-2023-1_tercerCorte">2023-1_3.pdf</a></li>
                    <li><a href={descarga}download="Preparcial-2023-1_final">2023-1_4.pdf</a></li>
                    <li><a href={descarga}download="Preparcial-2022-1_primerCorte">2022-1_1.pdf</a></li>
                    <li><a href={descarga}download="Preparcial-2022-1_segundoCorte">2022-1_2.pdf</a></li>
                    <li><a href={descarga}download="Preparcial-2022-1_tercerCorte">2022-1_3.pdf</a></li>
                    <li><a href={descarga}download="Preparcial-2022-1_final">2023-1_4.pdf</a></li>
                </ul>
                </div>
                <div class="center">
                <ul>
                    <h1>Talleres</h1>
                    <li>2023-2_1.pdf</li>
                    <li>2023-2_2.pdf</li>
                    <li>2023-2_3.pdf</li>
                    <li>2023-2_4.pdf</li>
                    <li>2023-1_1.pdf</li>
                    <li>2023-1_2.pdf</li>
                    <li>2023-1_3.pdf</li>
                    <li>2023-1_4.pdf</li>
                    <li>2022-1_1.pdf</li>
                    <li>2022-1_2.pdf</li>
                    <li>2022-1_3.pdf</li>
                    <li>2023-1_4.pdf</li>
                </ul>
                </div>
                <div class="right">
                <ul>
                    <h1>Quices</h1>
                    <li>2023-2_1.pdf</li>
                    <li>2023-2_3.pdf</li>
                    <li>2023-1_3.pdf</li>
                    <li>2022-1_3.pdf</li>
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