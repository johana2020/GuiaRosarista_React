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
import ProfesorSergioDuque from './paginas/Profesor/SegioDuque/SegioDuque'
import ProfesorSergioDuquereview from './paginas/Profesor/SegioDuque/review'
import Materias from './paginas/Materias/Materias';
import MateriasMateria1 from './paginas/Materias/Materia1/Materia1';
import MateriasMateria1Repositorio from './paginas/Materias/Materia1/repositorio';
import Materiasprecalculo from './paginas/Materias/precalculo/precalculo';
import MateriasprecalculoRepositorio from './paginas/Materias/precalculo/repositorio';
import Materiascalculo1 from './paginas/Materias/calculo1/calculo1';
import Materiascalculo1Repositorio from './paginas/Materias/calculo1/repositorio';
import Materiascalculo2 from './paginas/Materias/calculo2/calculo2';
import Materiascalculo2Repositorio from './paginas/Materias/calculo2/repositorio';
import Materiascalculo3 from './paginas/Materias/calculo3/calculo3';
import Materiascalculo3Repositorio from './paginas/Materias/calculo3/repositorio';
import MateriaspensamientoMatematico from './paginas/Materias/pensamientoMatematico/pensamientoMatematico';
import MateriaspensamientoMatematicoRepositorio from './paginas/Materias/pensamientoMatematico/repositorio';
import Materiasprogramación from './paginas/Materias/programación/programación';
import MateriasprogramaciónRepositorio from './paginas/Materias/programación/repositorio';
import MateriaslogicaTeoNumeros from './paginas/Materias/logicaTeoNumeros/logicaTeoNumeros';
import MateriaslogicaTeoNumerosRepositorio from './paginas/Materias/logicaTeoNumeros/repositorio';
import Materiasfisica1 from './paginas/Materias/fisica1/fisica1';
import Materiasfisica1Repositorio from './paginas/Materias/fisica1/repositorio';
import Materiasalgoritmos from './paginas/Materias/algoritmos/algoritmos';
import MateriasalgoritmosRepositorio from './paginas/Materias/algoritmos/repositorio';
import MateriaslogicaCienciaComputacion from './paginas/Materias/logicaCienciaComputacion/logicaCienciaComputacion';
import MateriaslogicaCienciaComputacionRepositorio from './paginas/Materias/logicaCienciaComputacion/repositorio';
import MateriasalgebraLineal from './paginas/Materias/algebraLineal/algebraLineal';
import MateriasalgebraLinealRepositorio from './paginas/Materias/algebraLineal/repositorio';
import MateriasarquitecturaComputador from './paginas/Materias/arquitecturaComputador/arquitecturaComputador';
import MateriasarquitecturaComputadorRepositorio from './paginas/Materias/arquitecturaComputador/repositorio';
import MateriasteoríaComputacion from './paginas/Materias/teoríaComputacion/teoríaComputacion';
import MateriasteoríaComputacionRepositorio from './paginas/Materias/teoríaComputacion/repositorio';
import Materiascornestone from './paginas/Materias/cornestone/cornestone';
import MateriascornestoneRepositorio from './paginas/Materias/cornestone/repositorio';
import MateriasingenieriaDatos from './paginas/Materias/ingenieriaDatos/ingenieriaDatos';
import MateriasingenieriaDatosRepositorio from './paginas/Materias/ingenieriaDatos/repositorio';
import Materiasoptimización from './paginas/Materias/optimización/optimización';
import MateriasoptimizaciónRepositorio from './paginas/Materias/optimización/repositorio';
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
    path: "profesor/SergioDuque",
    element: <ProfesorSergioDuque/>,
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
    path: "materias/precalculo",
    element: <Materiasprecalculo/>,
  },
  {
    path: "materias/precalculo/repositorio",
    element: <MateriasprecalculoRepositorio/>,
  },
  {
    path: "materias/calculo1",
    element: <Materiascalculo1/>,
  },
  {
    path: "materias/calculo1/repositorio",
    element: <Materiascalculo1Repositorio/>,
  },
  {
    path: "materias/calculo2",
    element: <Materiascalculo2/>,
  },
  {
    path: "materias/calculo2/repositorio",
    element: <Materiascalculo2Repositorio/>,
  },
  {
    path: "materias/calculo3",
    element: <Materiascalculo3/>,
  },
  {
    path: "materias/calculo3/repositorio",
    element: <Materiascalculo3Repositorio/>,
  },
  {
    path: "materias/pensamientoMatematico",
    element: <MateriaspensamientoMatematico/>,
  },
  {
    path: "materias/pensamientoMatematico/repositorio",
    element: <MateriaspensamientoMatematicoRepositorio/>,
  },
  {
    path: "materias/programación",
    element: <Materiasprogramación/>,
  },
  {
    path: "materias/programación/repositorio",
    element: <MateriasprogramaciónRepositorio/>,
  },
  {
    path: "materias/logicaTeoNumeros",
    element: <MateriaslogicaTeoNumeros/>,
  },
  {
    path: "materias/logicaTeoNumeros/repositorio",
    element: <MateriaslogicaTeoNumerosRepositorio/>,
  },
  {
    path: "materias/fisica1",
    element: <Materiasfisica1/>,
  },
  {
    path: "materias/fisica1/repositorio",
    element: <Materiasfisica1Repositorio/>,
  },
  {
    path: "materias/algoritmos",
    element: <Materiasalgoritmos/>,
  },
  {
    path: "materias/algoritmos/repositorio",
    element: <MateriasalgoritmosRepositorio/>,
  },
  {
    path: "materias/logicaCienciaComputacion",
    element: <MateriaslogicaCienciaComputacion/>,
  },
  {
    path: "materias/logicaCienciaComputacion/repositorio",
    element: <MateriaslogicaCienciaComputacionRepositorio/>,
  },
  {
    path: "materias/algebraLineal",
    element: <MateriasalgebraLineal/>,
  },
  {
    path: "materias/algebraLineal/repositorio",
    element: <MateriasalgebraLinealRepositorio/>,
  },
  {
    path: "materias/arquitecturaComputador",
    element: <MateriasarquitecturaComputador/>,
  },
  {
    path: "materias/arquitecturaComputador/repositorio",
    element: <MateriasarquitecturaComputadorRepositorio/>,
  },
  {
    path: "materias/teoríaComputacion",
    element: <MateriasteoríaComputacion/>,
  },
  {
    path: "materias/teoríaComputacion/repositorio",
    element: <MateriasteoríaComputacionRepositorio/>,
  },
  {
    path: "materias/cornestone",
    element: <Materiascornestone/>,
  },
  {
    path: "materias/cornestone/repositorio",
    element: <MateriascornestoneRepositorio/>,
  },
  {
    path: "materias/ingenieriaDatos",
    element: <MateriasingenieriaDatos/>,
  },
  {
    path: "materias/ingenieriaDatos/repositorio",
    element: <MateriasingenieriaDatosRepositorio/>,
  },
  {
    path: "materias/optimización",
    element: <Materiasoptimización/>,
  },
  {
    path: "materias/optimización/repositorio",
    element: <MateriasoptimizaciónRepositorio/>,
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





