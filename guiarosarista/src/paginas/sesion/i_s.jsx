import '../sesion/estilo_sesion.css';
import { BrowserRouter, Link } from "react-router-dom";
import nav_bar from '../../componentes/nav_bar/nav_bar';
import Header from '../../componentes/header/header';
import LoginForm from '../../componentes/formulario/formulario'



function Login() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <nav_bar/>     
    
        <div class="box" >
            <LoginForm/>
    </div>
    </BrowserRouter>
    </>
  );
}

export default Login;