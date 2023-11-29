import '../profesor.css';
import '../Perfil.css';
import NavBar from '../../../componentes/NavBar/navbar';
import Header from '../../../componentes/Header/header';
import { Link } from "react-router-dom";

function Profesor1() {
  return (
    <>
    <Header/>
    <NavBar/>
    <div class="Perfil">
        <div class="box">
        <h1>Perfil de Stella Ines Sierra</h1>
            <div class="Interbox">
                <div class="top"> 
                    <img src="data:image/png;base64,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"/>
                    <div class ="right">
                        <p><strong>Calificación general:</strong> 4.0/5.0</p>
                        <div class="botonS"><a href="#Calificar">Calificar profesor</a></div><br></br>
                        <div class="botonS"><Link to="./review" target="_blank">Ver comentarios</Link></div>
                    </div>
                </div>
                <div class="Bottom">
                    <div>
                        <div class="texto"><strong>Nombre:</strong> Stella Ines Sierra</div>
                    </div>
                    <br></br>
                    <div>
                        <div class="texto"><strong>Correo:</strong> Stella.Sierra@urosario.edu.co</div>
                    </div>
                    <br></br>
                    <div>
                        <div class="texto"><strong>Facultad:</strong> EICT</div>
                    </div>
                    <br></br>
                    <div>
                        <div class="texto"><strong>Formación:</strong> formación.pdf</div>
                    </div>
                    <br></br>
                    <div>
                        <div class="texto"><strong><a href="#openModal">Click para ver Materias que dicta</a></strong></div>
                    </div>
                </div>
            </div>
            <h1>
            <div class="botonS" ><a href="EditarProfesor.html" target="_blank">Editar</a></div>
            <div class="botonS" ><a href="EliminarProfesor.html" target="_blank">Eliminar</a></div>
            <br></br><br></br>
        </h1>
        </div>

  {/*Modal Clasificar*/}
  
        <div id="Calificar" class="modalDialog">
        <div>
            <a href="#close" title="Close" class="close">X</a>
            <h1>Calificar aquí</h1>
            <div class="clasificacion">
                <input id="radio1" type="radio" name="estrellas" value="5"/>
                  <label for="radio1">★</label>
                <input id="radio2" type="radio" name="estrellas" value="4"/>
                  <label for="radio2">★</label>
                <input id="radio3" type="radio" name="estrellas" value="3"/>
                  <label for="radio3">★</label>
                <input id="radio4" type="radio" name="estrellas" value="2"/>
                  <label for="radio4">★</label>
                <input id="radio5" type="radio" name="estrellas" value="1"/>
                  <label for="radio5">★</label>
            </div>
	        
		    <div>
                <input name="a" id="a"></input><br></br><br></br><br></br>
            </div>
            <div class="botonS">
                <a href="#close">Guardar</a>
            </div>
        </div>
    </div>

{/* Modal materias */}
<div id="openModal" class="modalDialog">
        <div>
            <a href="#close" title="Close" class="close">X</a>
            <h1>Materias</h1>
            <div class="texto">
                <Link to = "/Materias/precalculo">Precalculo</Link>
            </div>
        </div>
    </div>


    </div>
    </>
  );
}
export default Profesor1;