import './materias.css';
import { Link } from "react-router-dom";
import NavBar from '../../componentes/NavBar/navbar';
import Header from '../../componentes/Header/header';


function Materias() {
  return (
    <>
    <Header/>
    <NavBar/>
    <div>
        <div class="box" >
        <h1>Listado de materias</h1>
        <div class="Interbox" >
          {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAvJJREFUWEfV11uopnMUBvDfOJZC7hinaRAxmdxMwoUohigXiByLMTdTqIkoKckxkZDQoEihFELJ6QK5oiiHGDKRUJQcc+rR2uadt3fv7/2Pvb/Z1s33vd+31vN/Wv+1nrXeJRaZLVlkfPxvCR2HE3AklmNPfIWNeBMv4LX5yPakDK3E3Th6xGEvYR0+GOE7q8tchM7D/di54YCfcSaebYjZwnU2QqfjiY7n77gXr+BDfFpXdwhynZdg+45/rvfFrSE1RGh/vItdC/ATnIyP5jhgBZ7HPuXzDQ7Ft62khgg9hdMKKNk4ZiRwyLyBfSv2Pqz9r4RW4a0C+Q0H47MG0DTB2/wjJ3/hwOrE0RD9DN2BSys63y8fjbTZ8TGcVY9X4NYWjD6htGyyEjuqNKYFL75n4PEKehnHtwD0CX2P3QtgN/zQAla+y6oL8/g50iSjrU8odbNjRe+AP0YjbXaMbv1Sj9GlXVow+oS+xF4FkM+Mh1Zbii8qKPJxeAtAn9DrVTvBOKlmVAtefE/F0xX0KM5tAegTugbXFcADWNMCVr6P4Jz6fiVuacHoE8ooeL8A/iy1jTiOtejQO+X8Kw7CprHB8RtS6odxfoF8XJP+6xGg+5VS712+1yMZb7IhQinK97BHIWWQrp4wy47Ac7UnJSzNcAB+amIzS4aCcQqe6YBl2t+DVzvTPgKaAXosLu5hPYkL8eN8EQrO2XgIOzWARn9SQ9ksv0PGz52I4I6ySRvjYbirsjAJMGMiXZlspvZmBDbXdnOne+fEmURoJjhL2ImdnTp1tl3VSHbpB3sLXZa5/uqRAk+hzwuhSTj9/9NxeQHobpHxuXZSpsZmqJVQ/G/AVQOBEcoI5qAtJKFg5yXhooGT0yz5PeK7hS0koRyUOtuACwZI5ffIRTbLf22hCc0cdDsuGyCVV6bu281UX6Wzyq7vkLoRV0/7yvrn3VQFHWK3DVX1tK6se3ZGTUbQ1Ltsa6RiqjU0iuC2uLI5iS06Qn8D1St7JWzOI0kAAAAASUVORK5CYII=" /> */}
            <div class="left">
              <ul>
                <Link to="./precalculo"><li>Precalculo</li></Link>
                <Link to="./calculo1"><li>Cáculo 1</li></Link>
                <Link to="./calculo2"><li>Cáculo 2</li></Link>
                <Link to="./calculo3"><li>Calculo 3</li></Link>
                <Link to="./pensamientoMatematico"><li>Pensamiento Matemático</li></Link>
                <Link to="./programación"><li>Programación de Computadores</li></Link>
                <Link to="./logicaTeoNumeros"><li>Lógica, teoría de números y conjuntos</li></Link>
                <Link to="./fisica1"><li>Física I</li></Link>
                <Link to="./algoritmos"><li>Algoritmos y estructuras de datos</li></Link>
                <Link to="./logicaCienciaComputacion"><li>Lógica para ciencia de computación</li></Link>
                <Link to="./algebraLineal"><li>Álgebra Lineal</li></Link>
                <Link to="./arquitecturaComputador"><li>Arquitectura del computador</li></Link>
                <Link to="./teoríaComputacion"><li>Teoría de la computación</li></Link>
                <Link to="./cornestone"><li>Cornestone Project</li></Link>
                <Link to="./ingenieriaDatos"><li>Ingeniería de datos</li></Link>
                <Link to="./optimización"><li>Optimización</li></Link>
              </ul>
            </div>
            <div class="right">
              <ul>
                <Link to="./diseñoAlgoritmos"><li>Diseño y análisis de Algoritmos</li></Link>
                <Link to="./probabilidad1"><li>Probabilidad y Estadística I</li></Link>
                <Link to="./grafos"><li>Teoría de grafos</li></Link>
                <Link to="./variableCompleja"><li>Variable compleja</li></Link>
                <Link to="./ecuacionesDiferenciales"><li>Ecuaciones Diferenciales</li></Link>
                <Link to="./analisisReal"><li>Análisis Real</li></Link>
                <Link to="./probabilidad2"><li>Probabilidad y Estadística II</li></Link>
                <Link to="./keystone"><li>Keystone Project</li></Link>
                <Link to="./topologia"><li>Topología</li></Link>
                <Link to="./mathModel"><li>Math. Model of Syst</li></Link>
                <Link to="./analisisDatos"><li>Analísis estadíst. de datos</li></Link>
                <Link to="./redesComputadores"><li>Redes de computadores</li></Link>
                <Link to="./algebraAbstracta"><li>Álgebra abstracta</li></Link>
                <Link to="./analisisNumericoComputacion"><li>Análisis Num y Comp. Científica</li></Link>
                <Link to="./operatingSystems"><li>Operating Systems</li></Link>
                <Link to="./geometría"><li>Geometría</li></Link>
                <Link to="./capstoneProject"><li>Capstone Project</li></Link>
              </ul>
            </div>
            
          </div>
        <h1><div class="botonS"><Link to="./Profesor1" target="_blank">Agregar Materia</Link></div></h1>
        
    </div>

    </div>
    </>
  );
}

export default Materias;