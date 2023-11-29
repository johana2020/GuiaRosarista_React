import { Link } from "react-router-dom";
import NavBar from '../../componentes/NavBar/navbar';
import Header from '../../componentes/Header/header';
import './repositorio.css';

function Materias() {
  return (
    <>
    <Header/>
    <NavBar/>
    <div class="repositorioGeneral">
        <div class="box">
            <h1>Bienvenido al repositorio.</h1>
            <p>Aquí puedes encontrar diferentes documentos como parciales, guías, etc de cada materia</p>
        </div>
        <div class="box" >
        <div class="Interbox" >
          {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAvJJREFUWEfV11uopnMUBvDfOJZC7hinaRAxmdxMwoUohigXiByLMTdTqIkoKckxkZDQoEihFELJ6QK5oiiHGDKRUJQcc+rR2uadt3fv7/2Pvb/Z1s33vd+31vN/Wv+1nrXeJRaZLVlkfPxvCR2HE3AklmNPfIWNeBMv4LX5yPakDK3E3Th6xGEvYR0+GOE7q8tchM7D/di54YCfcSaebYjZwnU2QqfjiY7n77gXr+BDfFpXdwhynZdg+45/rvfFrSE1RGh/vItdC/ATnIyP5jhgBZ7HPuXzDQ7Ft62khgg9hdMKKNk4ZiRwyLyBfSv2Pqz9r4RW4a0C+Q0H47MG0DTB2/wjJ3/hwOrE0RD9DN2BSys63y8fjbTZ8TGcVY9X4NYWjD6htGyyEjuqNKYFL75n4PEKehnHtwD0CX2P3QtgN/zQAla+y6oL8/g50iSjrU8odbNjRe+AP0YjbXaMbv1Sj9GlXVow+oS+xF4FkM+Mh1Zbii8qKPJxeAtAn9DrVTvBOKlmVAtefE/F0xX0KM5tAegTugbXFcADWNMCVr6P4Jz6fiVuacHoE8ooeL8A/iy1jTiOtejQO+X8Kw7CprHB8RtS6odxfoF8XJP+6xGg+5VS712+1yMZb7IhQinK97BHIWWQrp4wy47Ac7UnJSzNcAB+amIzS4aCcQqe6YBl2t+DVzvTPgKaAXosLu5hPYkL8eN8EQrO2XgIOzWARn9SQ9ksv0PGz52I4I6ySRvjYbirsjAJMGMiXZlspvZmBDbXdnOne+fEmURoJjhL2ImdnTp1tl3VSHbpB3sLXZa5/uqRAk+hzwuhSTj9/9NxeQHobpHxuXZSpsZmqJVQ/G/AVQOBEcoI5qAtJKFg5yXhooGT0yz5PeK7hS0koRyUOtuACwZI5ffIRTbLf22hCc0cdDsuGyCVV6bu281UX6Wzyq7vkLoRV0/7yvrn3VQFHWK3DVX1tK6se3ZGTUbQ1Ltsa6RiqjU0iuC2uLI5iS06Qn8D1St7JWzOI0kAAAAASUVORK5CYII=" /> */}
            <div class="left">
              <ul>
                <Link to="../Materias/precalculo/repositorio"><li>Precalculo</li></Link>
                <Link to="../Materias/calculo1/repositorio"><li>Cáculo 1</li></Link>
                <Link to="../Materias/calculo2/repositorio"><li>Cáculo 2</li></Link>
                <Link to="../Materias/calculo3/repositorio"><li>Calculo 3</li></Link>
                <Link to="../Materias/pensamientoMatematico/repositorio"><li>Pensamiento Matemático</li></Link>
                <Link to="../Materias/programación/repositorio"><li>Programación de Computadores</li></Link>
                <Link to="../Materias/logicaTeoNumeros/repositorio"><li>Lógica, teoría de números y conjuntos</li></Link>
                <Link to="../Materias/fisica1/repositorio"><li>Física I</li></Link>
                <Link to="../Materias/algoritmos/repositorio"><li>Algoritmos y estructuras de datos</li></Link>
                <Link to="../Materias/logicaCienciaComputacion/repositorio"><li>Lógica para ciencia de computación</li></Link>
                <Link to="../Materias/algebraLineal/repositorio"><li>Álgebra Lineal</li></Link>
                <Link to="../Materias/arquitecturaComputador/repositorio"><li>Arquitectura del computador</li></Link>
                <Link to="../Materias/teoríaComputacion/repositorio"><li>Teoría de la computación</li></Link>
                <Link to="../Materias/cornestone/repositorio"><li>Cornestone Project</li></Link>
                <Link to="../Materias/ingenieriaDatos/repositorio"><li>Ingeniería de datos</li></Link>
                <Link to="../Materias/optimización/repositorio"><li>Optimización</li></Link>
              </ul>
            </div>
            <div class="right">
              <ul>
                <Link to="../Materias/diseñoAlgoritmos/repositorio"><li>Diseño y análisis de Algoritmos</li></Link>
                <Link to="../Materias/probabilidad1/repositorio"><li>Probabilidad y Estadística I</li></Link>
                <Link to="../Materias/teoriaGrafos/repositorio"><li>Teoría de grafos</li></Link>
                <Link to="../Materias/variableCompleja/repositorio"><li>Variable compleja</li></Link>
                <Link to="../Materias/ecuacionesDiferenciales/repositorio"><li>Ecuaciones Diferenciales</li></Link>
                <Link to="../Materias/analisisReal/repositorio"><li>Análisis Real</li></Link>
                <Link to="../Materias/probabilidad2/repositorio"><li>Probabilidad y Estadística II</li></Link>
                <Link to="../Materias/keystone/repositorio"><li>Keystone Project</li></Link>
                <Link to="../Materias/topologia/repositorio"><li>Topología</li></Link>
                <Link to="../Materias/mathModel/repositorio"><li>Math. Model of Syst</li></Link>
                <Link to="../Materias/analisisDatos/repositorio"><li>Analísis estadíst. de datos</li></Link>
                <Link to="../Materias/redesComputadores/repositorio"><li>Redes de computadores</li></Link>
                <Link to="../Materias/algebraAbstracta/repositorio"><li>Álgebra abstracta</li></Link>
                <Link to="../Materias/analisisNumericoComputacion/repositorio"><li>Análisis Num y Comp. Científica</li></Link>
                <Link to="../Materias/operatingSystems/repositorio"><li>Operating Systems</li></Link>
                <Link to="../Materias/geometría/repositorio"><li>Geometría</li></Link>
                <Link to="../Materias/capstoneProject/repositorio"><li>Capstone Project</li></Link>
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