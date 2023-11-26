import './profesor.css';
import { Link } from "react-router-dom";
import NavBar from '../../componentes/NavBar/navbar';
import Header from '../../componentes/Header/header';


function Profesor() {
  return (
    <>
    <Header/>
    <NavBar/>
    <div>
        <div class="box" >
        <h1>Listado de profesores</h1>
        <div class="Interbox" >
          {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAvJJREFUWEfV11uopnMUBvDfOJZC7hinaRAxmdxMwoUohigXiByLMTdTqIkoKckxkZDQoEihFELJ6QK5oiiHGDKRUJQcc+rR2uadt3fv7/2Pvb/Z1s33vd+31vN/Wv+1nrXeJRaZLVlkfPxvCR2HE3AklmNPfIWNeBMv4LX5yPakDK3E3Th6xGEvYR0+GOE7q8tchM7D/di54YCfcSaebYjZwnU2QqfjiY7n77gXr+BDfFpXdwhynZdg+45/rvfFrSE1RGh/vItdC/ATnIyP5jhgBZ7HPuXzDQ7Ft62khgg9hdMKKNk4ZiRwyLyBfSv2Pqz9r4RW4a0C+Q0H47MG0DTB2/wjJ3/hwOrE0RD9DN2BSys63y8fjbTZ8TGcVY9X4NYWjD6htGyyEjuqNKYFL75n4PEKehnHtwD0CX2P3QtgN/zQAla+y6oL8/g50iSjrU8odbNjRe+AP0YjbXaMbv1Sj9GlXVow+oS+xF4FkM+Mh1Zbii8qKPJxeAtAn9DrVTvBOKlmVAtefE/F0xX0KM5tAegTugbXFcADWNMCVr6P4Jz6fiVuacHoE8ooeL8A/iy1jTiOtejQO+X8Kw7CprHB8RtS6odxfoF8XJP+6xGg+5VS712+1yMZb7IhQinK97BHIWWQrp4wy47Ac7UnJSzNcAB+amIzS4aCcQqe6YBl2t+DVzvTPgKaAXosLu5hPYkL8eN8EQrO2XgIOzWARn9SQ9ksv0PGz52I4I6ySRvjYbirsjAJMGMiXZlspvZmBDbXdnOne+fEmURoJjhL2ImdnTp1tl3VSHbpB3sLXZa5/uqRAk+hzwuhSTj9/9NxeQHobpHxuXZSpsZmqJVQ/G/AVQOBEcoI5qAtJKFg5yXhooGT0yz5PeK7hS0koRyUOtuACwZI5ffIRTbLf22hCc0cdDsuGyCVV6bu281UX6Wzyq7vkLoRV0/7yvrn3VQFHWK3DVX1tK6se3ZGTUbQ1Ltsa6RiqjU0iuC2uLI5iS06Qn8D1St7JWzOI0kAAAAASUVORK5CYII=" /> */}
            <div class="left">
              <ul>
                <Link to="./Profesor1"><li>Profesor 01</li></Link>
                <li><a href="Profesor1.html">Profesor 02</a></li>
                <li><a href="Profesor1.html">Profesor 03</a></li>
                <li><a href="Profesor1.html">Profesor 04</a></li>                
                <li><a href="Profesor1.html">Profesor 05</a></li>
                <li><a href="Profesor1.html">Profesor 06</a></li>
                <li><a href="Profesor1.html">Profesor 07</a></li>
                <li><a href="Profesor1.html">Profesor 08</a></li>                
                <li><a href="Profesor1.html">Profesor 09</a></li>
                <li><a href="Profesor1.html">Profesor 10</a></li>
                <li><a href="Profesor1.html">Profesor 11</a></li>
                <li><a href="Profesor1.html">Profesor 12</a></li>
              </ul>
            </div>
            <div class="right">
              <ul>
                <li><a href="Profesor1.html">Profesor 13</a></li>
                <li><a href="Profesor1.html">Profesor 14</a></li>
                <li><a href="Profesor1.html">Profesor 15</a></li>
                <li><a href="Profesor1.html">Profesor 16</a></li>
                <li><a href="Profesor1.html">Profesor 17</a></li>
                <li><a href="Profesor1.html">Profesor 18</a></li>
                <li><a href="Profesor1.html">Profesor 19</a></li>
                <li><a href="Profesor1.html">Profesor 20</a></li>
                <li><a href="Profesor1.html">Profesor 21</a></li>
                <li><a href="Profesor1.html">Profesor 22</a></li>
              </ul>
            </div>
            
          </div>
        <h1><div class="botonS"><Link to="./Profesor1" target="_blank">Agregar Profesor</Link></div></h1>
        <br></br>
    </div>

    </div>
    </>
  );
}

export default Profesor;