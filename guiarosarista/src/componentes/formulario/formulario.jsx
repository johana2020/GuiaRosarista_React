import React, { useState } from 'react';
import '../formulario/estilofor.css';
import { BrowserRouter, Link } from "react-router-dom";



const LoginForm = () => {
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

return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label for="username" class="custom-label">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>

        <div>
        <label for="username" class="custom-label">Contraseña:</label>         
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button class = "botonS">Acceder</button>
      </form>
    </div>
  );
  
};

export default LoginForm;
