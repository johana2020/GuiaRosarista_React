import '../sesion/estilo_sesion.css';
import { BrowserRouter, Link } from "react-router-dom";
import NavBar from '../../componentes/NavBar/navbar';
import Header from '../../componentes/Header/header';
import LoginForm from '../../componentes/formulario/formulario'



function Login() {
  return (
    <>
    <Header/>
    <NavBar/>     
      <LoginForm/>
      <h1><div class="botonS"><Link to="/registro" target="_blank">Crear cuenta</Link></div></h1>  
    </>
  );
}

export default Login;