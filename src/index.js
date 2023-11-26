import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Inicio from './paginas/Inicio/inicio';
import Profesor from './paginas/Profesor/profesor';
import ProfesorProfesor1 from './paginas/Profesor/Profesor1/Profesor1';
import ProfesorProfesor1review from './paginas/Profesor/Profesor1/review';
import Materias from './paginas/Materias/Materias';
import MateriasMateria1 from './paginas/Materias/Materia1/Materia1';
import MateriasMateria1Repositorio from './paginas/Materias/Materia1/repositorio';
import Repositorio from './paginas/Repositorio/RepositorioLista';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio/>,
  },
  {
    path: "profesor",
    element: <Profesor/>,
  },
  {
    path: "profesor/Profesor1",
    element: <ProfesorProfesor1/>,
  },
  {
    path: "profesor/Profesor1/review",
    element: <ProfesorProfesor1review/>,
  },
  {
    path: "materias",
    element: <Materias/>,
  },
  {
    path: "materias/Materia1",
    element: <MateriasMateria1/>,
  },
  {
    path: "materias/Materia1/repositorio",
    element: <MateriasMateria1Repositorio/>,
  },
  {
    path: "repositorio",
    element: <Repositorio/>,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>


);





