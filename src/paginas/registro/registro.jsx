import '../registro/estiloregistro.css';
import { BrowserRouter, Link } from "react-router-dom";
import Header from '../../componentes/Header/header';
import NavBar from '../../componentes/NavBar/navbar';
import { useState } from 'react';

const Registro = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        };
          
          
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar los datos a tu backend para autenticación
        console.log('Email:', email);
        console.log('Password:', password);
        // Resetear los campos después de enviar
        setEmail('');
        setPassword('');
    };

    return(
       <>
        <Header/>
        <NavBar/>
        <br/>
    <form class="registration-form">
    <div>
    <label for="username">Usuario:</label>
    <input type="text" id="username" name="username" required />
  </div>
  <div>
    <label for="password">Contraseña:</label>
    <input type="password" id="password" name="password" required />
  </div>
  <div>
    <label for="confirmPassword">Confirmar contraseña:</label>
    <input type="password" id="confirmPassword" name="confirmPassword" required />
  </div>
  <div>
    <label for="email">Correo electrónico:</label>
    <input type="email" id="email" name="email" required />
  </div>
  <div>
    <label for="identification">Identificación:</label>
    <input type="text" id="identification" name="identification" required />
  </div>
  <button type="submit">Crea una cuenta</button>
</form>
    </>
);
    };
    
export default Registro;

