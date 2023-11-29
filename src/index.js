import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Inicio from './paginas/Inicio/inicio';
import Horario from './paginas/horario/app';
import HorarioRegistro from './paginas/horario/registrarHorario';
import HorarioActualizar from './paginas/horario/actualizarHorario/Pagina';
import HorarioEliminar from './paginas/horario/eliminarHorario/Eliminar';
import Registro from './paginas/registro/registro';
import Login from './paginas/sesion/i_s';
import Profesor from './paginas/Profesor/profesor';
import ProfesorProfesor1 from './paginas/Profesor/Profesor1/Profesor1';
import ProfesorProfesor1review from './paginas/Profesor/Profesor1/review';
import ProfesorAlexanderCardona from './paginas/Profesor/AlexanderCardona/AlexanderCardona';
import ProfesorAlexanderCardonareview from './paginas/Profesor/AlexanderCardona/review';
import ProfesorAnaBeltran from './paginas/Profesor/AnaBeltran/AnaBeltran';
import ProfesorAnaBeltranreview from './paginas/Profesor/AnaBeltran/review';
import ProfesorCamiloGomez from './paginas/Profesor/CamiloGomez/CamiloGomez';
import ProfesorCamiloGomezreview from './paginas/Profesor/CamiloGomez/review';
import ProfesorCarlosGiraldo from './paginas/Profesor/CarlosGiraldo/CarlosGiraldo';
import ProfesorCarlosGiraldoreview from './paginas/Profesor/CarlosGiraldo/review';
import ProfesorCarolinaAlbarracin from './paginas/Profesor/CarolinaAlbarracin/CarolinaAlbarracin';
import ProfesorCarolinaAlbarracinreview from './paginas/Profesor/CarolinaAlbarracin/review';import ProfesorCesarRodriguez from './paginas/Profesor/CesarRodriguez/CesarRodriguez';
import ProfesorCesarRodriguezreview from './paginas/Profesor/CesarRodriguez/review';
import ProfesorCristianMartinez from './paginas/Profesor/CristianMartinez/CristianMartinez';
import ProfesorCristianMartinezreview from './paginas/Profesor/CristianMartinez/review';  
import ProfesorDanielBojaca from './paginas/Profesor/DanielBojaca/DanielBojaca';
import ProfesorDanielBojacareview from './paginas/Profesor/DanielBojaca/review';
import ProfesorDanielCastro from './paginas/Profesor/DanielCastro/DanielCastro';
import ProfesorDanielCastroreview from './paginas/Profesor/DanielCastro/review';
import ProfesorDanielRambaut from './paginas/Profesor/DanielRambaut/DanielRambaut';
import ProfesorDanielRambautreview from './paginas/Profesor/DanielRambaut/review';
import ProfesorDavidAndrade from './paginas/Profesor/DavidAndrade/DavidAndrade';
import ProfesorDavidAndradereview from './paginas/Profesor/DavidAndrade/review';
import ProfesorDavidCeleita from './paginas/Profesor/DavidCeleita/DavidCeleita';
import ProfesorDavidCeleitareview from './paginas/Profesor/DavidCeleita/review';
import ProfesorDavidGonzalez from './paginas/Profesor/DavidGonzalez/DavidGonzalez';
import ProfesorDavidGonzalezreview from './paginas/Profesor/DavidGonzalez/review';
import ProfesorEdwinCubides from './paginas/Profesor/EdwinCubides/EdwinCubides';
import ProfesorEdwinCubidesreview from './paginas/Profesor/EdwinCubides/review';
import ProfesorGabrielPerez from './paginas/Profesor/GabrielPerez/GabrielPerez';
import ProfesorGabrielPerezreview from './paginas/Profesor/GabrielPerez/review';
import ProfesorHenryNaranjo from './paginas/Profesor/HenryNaranjo/HenryNaranjo';
import ProfesorHenryNaranjoreview from './paginas/Profesor/HenryNaranjo/review';
import ProfesorJavierCasas from './paginas/Profesor/JavierCasas/JavierCasas';
import ProfesorJavierCasasreview from './paginas/Profesor/JavierCasas/review';
import ProfesorJohnArredondo from './paginas/Profesor/JohnArredondo/JohnArredondo';
import ProfesorJohnArredondoreview from './paginas/Profesor/JohnArredondo/review';
import ProfesorJorgeBecerra from './paginas/Profesor/JorgeBecerra/JorgeBecerra';
import ProfesorJorgeBecerrareview from './paginas/Profesor/JorgeBecerra/review';
import ProfesorJoseGuerrero from './paginas/Profesor/JoseGuerrero/JoseGuerrero';
import ProfesorJoseGuerreroreview from './paginas/Profesor/JoseGuerrero/review';
import ProfesorJuanYepes from './paginas/Profesor/JuanYepes/JuanYepes';
import ProfesorJuanYepesreview from './paginas/Profesor/JuanYepes/review';
import ProfesorJuanRubiano from './paginas/Profesor/JuanRubiano/JuanRubiano';
import ProfesorJuanRubianoreview from './paginas/Profesor/JuanRubiano/review';
import ProfesorLuisSeijas from './paginas/Profesor/LuisSeijas/LuisSeijas';
import ProfesorLuisSeijasreview from './paginas/Profesor/LuisSeijas/review';
import ProfesorLuzEcheverry from './paginas/Profesor/LuzEcheverry/LuzEcheverry';
import ProfesorLuzEcheverryreview from './paginas/Profesor/LuzEcheverry/review';
import ProfesorLuzGarcia from './paginas/Profesor/LuzGarcia/LuzGarcia';
import ProfesorLuzGarciareview from './paginas/Profesor/LuzGarcia/review';
import ProfesorMauroArtigiani from './paginas/Profesor/MauroArtigiani/MauroArtigiani';
import ProfesorMauroArtigianireview from './paginas/Profesor/MauroArtigiani/review';
import ProfesorMidoryKomatsudani from './paginas/Profesor/MidoryKomatsudani/MidoryKomatsudani';
import ProfesorMidoryKomatsudanireview from './paginas/Profesor/MidoryKomatsudani/review';
import ProfesorMiguelPachon from './paginas/Profesor/MiguelPachon/MiguelPachon';
import ProfesorMiguelPachonreview from './paginas/Profesor/MiguelPachon/review';
import ProfesorNicolasAvilan from './paginas/Profesor/NicolasAvilan/NicolasAvilan';
import ProfesorNicolasAvilanreview from './paginas/Profesor/NicolasAvilan/review';
import ProfesorNormaSarmiento from './paginas/Profesor/NormaSarmiento/NormaSarmiento';
import ProfesorNormaSarmientoreview from './paginas/Profesor/NormaSarmiento/review';
import ProfesorPatriciaHernandez from './paginas/Profesor/PatriciaHernandez/PatriciaHernandez';
import ProfesorPatriciaHernandezreview from './paginas/Profesor/PatriciaHernandez/review';
import ProfesorPedroWightman from './paginas/Profesor/PedroWightman/PedroWightman';
import ProfesorPedroWightmanreview from './paginas/Profesor/PedroWightman/review';
import ProfesorRafaelMendez from './paginas/Profesor/RafaelMendez/RafaelMendez';
import ProfesorRafaelMendezreview from './paginas/Profesor/RafaelMendez/review';
import ProfesorRicardoGarzon from './paginas/Profesor/RicardoGarzon/RicardoGarzon';
import ProfesorRicardoGarzonreview from './paginas/Profesor/RicardoGarzon/review';
import ProfesorSandraOlaya from './paginas/Profesor/SandraOlaya/SandraOlaya';
import ProfesorSandraOlayareview from './paginas/Profesor/SandraOlaya/review';
import ProfesorSegioDuque from './paginas/Profesor/SegioDuque/SegioDuque';
import ProfesorSegioDuquereview from './paginas/Profesor/SegioDuque/review';
import ProfesorStellaSierra from './paginas/Profesor/StellaSierra/StellaSierra';
import ProfesorStellaSierrareview from './paginas/Profesor/StellaSierra/review';
import ProfesorTatianaCabrera from './paginas/Profesor/TatianaCabrera/TatianaCabrera';
import ProfesorTatianaCabrerareview from './paginas/Profesor/TatianaCabrera/review';
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
import Materiasprobabilidad1 from './paginas/Materias/probabilidad1/probabilidad1';
import Materiasprobabilidad1Repositorio from './paginas/Materias/probabilidad1/repositorio';
import MateriasteoriaGrafos from './paginas/Materias/teoriaGrafos/teoriaGrafos';
import MateriasteoriaGrafosRepositorio from './paginas/Materias/teoriaGrafos/repositorio';
import MateriasvariableCompleja from './paginas/Materias/variableCompleja/variableCompleja';
import MateriasvariableComplejaRepositorio from './paginas/Materias/variableCompleja/repositorio';
import MateriasecuacionesDiferenciales from './paginas/Materias/ecuacionesDiferenciales/ecuacionesDiferenciales';
import MateriasecuacionesDiferencialesRepositorio from './paginas/Materias/ecuacionesDiferenciales/repositorio';
import MateriasanalisisReal from './paginas/Materias/analisisReal/analisisReal';
import MateriasanalisisRealRepositorio from './paginas/Materias/analisisReal/repositorio';
import Materiasprobabilidad2 from './paginas/Materias/probabilidad2/probabilidad2';
import Materiasprobabilidad2Repositorio from './paginas/Materias/probabilidad2/repositorio';
import Materiaskeystone from './paginas/Materias/keystone/keystone';
import MateriaskeystoneRepositorio from './paginas/Materias/keystone/repositorio';
import Materiastopologia from './paginas/Materias/topologia/topologia';
import MateriastopologiaRepositorio from './paginas/Materias/topologia/repositorio';
import MateriasmathModel from './paginas/Materias/mathModel/mathModel';
import MateriasmathModelRepositorio from './paginas/Materias/mathModel/repositorio';
import MateriasanalisisEstadistico from './paginas/Materias/analisisEstadistico/analisisEstadistico';
import MateriasanalisisEstadisticoRepositorio from './paginas/Materias/analisisEstadistico/repositorio';
import MateriasredesComputadores from './paginas/Materias/redesComputadores/redesComputadores';
import MateriasredesComputadoresRepositorio from './paginas/Materias/redesComputadores/repositorio';
import MateriasalgebraAbstracta from './paginas/Materias/algebraAbstracta/algebraAbstracta';
import MateriasalgebraAbstractaRepositorio from './paginas/Materias/algebraAbstracta/repositorio';
import MateriasanlisisNumCom from './paginas/Materias/anlisisNumCom/anlisisNumCom';
import MateriasanlisisNumComRepositorio from './paginas/Materias/anlisisNumCom/repositorio';
import MateriasoperatingSystems from './paginas/Materias/operatingSystems/operatingSystems';
import MateriasoperatingSystemsRepositorio from './paginas/Materias/operatingSystems/repositorio';
import Materiasgeometria from './paginas/Materias/geometria/geometria';
import MateriasgeometriaRepositorio from './paginas/Materias/geometria/repositorio';
import Materiascapstone from './paginas/Materias/capstone/capstone';
import MateriascapstoneRepositorio from './paginas/Materias/capstone/repositorio';
import Repositorio from './paginas/Repositorio/RepositorioLista';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio/>,
  },
  {
    path: "/horario",
    element: <Horario/>
  },
  {
    path: "/horario/registro",
    element: <HorarioRegistro/>
  },
  {
    path: "/horario/actualizar",
    element: <HorarioActualizar/>
  },
  {
    path: "/horario/eliminar",
  element: <HorarioEliminar/>
  },
  {
    path: "/Registro",
    element: <Registro/>
  },
  {
    path: "/Login",
    element: <Login/>
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
    path: "profesor/AlexanderCardona",
    element: <ProfesorAlexanderCardona/>,
    },
    {
    path: "profesor/AlexanderCardona/review",
    element: <ProfesorAlexanderCardonareview/>,
    },
    {
    path: "profesor/AnaBeltran",
    element: <ProfesorAnaBeltran/>,
    },
    {
    path: "profesor/AnaBeltran/review",
    element: <ProfesorAnaBeltranreview/>,
    },
    {
    path: "profesor/CamiloGomez",
    element: <ProfesorCamiloGomez/>,
    },
    {
    path: "profesor/CamiloGomez/review",
    element: <ProfesorCamiloGomezreview/>,
    },
    {
    path: "profesor/CarlosGiraldo",
    element: <ProfesorCarlosGiraldo/>,
    },
    {
    path: "profesor/CarlosGiraldo/review",
    element: <ProfesorCarlosGiraldoreview/>,
    },
    {
    path: "profesor/CarolinaAlbarracin",
    element: <ProfesorCarolinaAlbarracin/>,
    },
    {
    path: "profesor/CarolinaAlbarracin/review",
    element: <ProfesorCarolinaAlbarracinreview/>,
    },
    {
    path: "profesor/CesarRodriguez",
    element: <ProfesorCesarRodriguez/>,
    },
    {
    path: "profesor/CesarRodriguez/review",
    element: <ProfesorCesarRodriguezreview/>,
    },
    {
    path: "profesor/CristianMartinez",
    element: <ProfesorCristianMartinez/>,
    },
    {
    path: "profesor/CristianMartinez/review",
    element: <ProfesorCristianMartinezreview/>,
    },
    {
    path: "profesor/CristianMartinez",
    element: <ProfesorCristianMartinez/>,
    },
    {
    path: "profesor/CristianMartinez/review",
    element: <ProfesorCristianMartinezreview/>,
    },
    {
    path: "profesor/DanielBojaca",
    element: <ProfesorDanielBojaca/>,
    },
    {
    path: "profesor/DanielBojaca/review",
    element: <ProfesorDanielBojacareview/>,
    },
    {
    path: "profesor/DanielCastro",
    element: <ProfesorDanielCastro/>,
    },
    {
    path: "profesor/DanielCastro/review",
    element: <ProfesorDanielCastroreview/>,
    },
    {
    path: "profesor/DanielRambaut",
    element: <ProfesorDanielRambaut/>,
    },
    {
    path: "profesor/DanielRambaut/review",
    element: <ProfesorDanielRambautreview/>,
    },
    {
    path: "profesor/DavidAndrade",
    element: <ProfesorDavidAndrade/>,
    },
    {
    path: "profesor/DavidAndrade/review",
    element: <ProfesorDavidAndradereview/>,
    },
    {
    path: "profesor/DavidCeleita",
    element: <ProfesorDavidCeleita/>,
    },
    {
    path: "profesor/DavidCeleita/review",
    element: <ProfesorDavidCeleitareview/>,
    },
    {
    path: "profesor/DavidGonzalez",
    element: <ProfesorDavidGonzalez/>,
    },
    {
    path: "profesor/DavidGonzalez/review",
    element: <ProfesorDavidGonzalezreview/>,
    },{
    path: "profesor/EdwinCubides",
    element: <ProfesorEdwinCubides/>,
    },
    {
    path: "profesor/EdwinCubides/review",
    element: <ProfesorEdwinCubidesreview/>,
    },
    {
    path: "profesor/GabrielPerez",
    element: <ProfesorGabrielPerez/>,
    },
    {
    path: "profesor/GabrielPerez/review",
    element: <ProfesorGabrielPerezreview/>,
    },
    {
    path: "profesor/HenryNaranjo",
    element: <ProfesorHenryNaranjo/>,
    },
    {
    path: "profesor/HenryNaranjo/review",
    element: <ProfesorHenryNaranjoreview/>,
    },
    {
    path: "profesor/JavierCasas",
    element: <ProfesorJavierCasas/>,
    },
    {
    path: "profesor/JavierCasas/review",
    element: <ProfesorJavierCasasreview/>,
    },
    {
    path: "profesor/JohnArredondo",
    element: <ProfesorJohnArredondo/>,
    },
    {
    path: "profesor/JohnArredondo/review",
    element: <ProfesorJohnArredondoreview/>,
    },
    {
    path: "profesor/JorgeBecerra",
    element: <ProfesorJorgeBecerra/>,
    },
    {
    path: "profesor/JorgeBecerra/review",
    element: <ProfesorJorgeBecerrareview/>,
    },
    {
    path: "profesor/JoseGuerrero",
    element: <ProfesorJoseGuerrero/>,
    },
    {
    path: "profesor/JoseGuerrero/review",
    element: <ProfesorJoseGuerreroreview/>,
    },
    {
    path: "profesor/JuanYepes",
    element: <ProfesorJuanYepes/>,
    },
    {
    path: "profesor/JuanYepes/review",
    element: <ProfesorJuanYepesreview/>,
    },
    {
    path: "profesor/JuanRubiano",
    element: <ProfesorJuanRubiano/>,
    },
    {
    path: "profesor/JuanRubiano/review",
    element: <ProfesorJuanRubianoreview/>,
    },
    {
    path: "profesor/LuisSeijas",
    element: <ProfesorLuisSeijas/>,
    },
    {
    path: "profesor/LuisSeijas/review",
    element: <ProfesorLuisSeijasreview/>,
    },
    {
    path: "profesor/LuzEcheverry",
    element: <ProfesorLuzEcheverry/>,
    },
    {
    path: "profesor/LuzEcheverry/review",
    element: <ProfesorLuzEcheverryreview/>,
    },
    {
    path: "profesor/LuzGarcia",
    element: <ProfesorLuzGarcia/>,
    },
    {
    path: "profesor/LuzGarcia/review",
    element: <ProfesorLuzGarciareview/>,
    },
    {
    path: "profesor/MauroArtigiani",
    element: <ProfesorMauroArtigiani/>,
    },
    {
    path: "profesor/MauroArtigiani/review",
    element: <ProfesorMauroArtigianireview/>,
    },
    {
    path: "profesor/MidoryKomatsudani",
    element: <ProfesorMidoryKomatsudani/>,
    },
    {
    path: "profesor/MidoryKomatsudani/review",
    element: <ProfesorMidoryKomatsudanireview/>,
    },
    {
    path: "profesor/MiguelPachon",
    element: <ProfesorMiguelPachon/>,
    },
    {
    path: "profesor/MiguelPachon/review",
    element: <ProfesorMiguelPachonreview/>,
    },
    {
    path: "profesor/NicolasAvilan",
    element: <ProfesorNicolasAvilan/>,
    },
    {
    path: "profesor/NicolasAvilan/review",
    element: <ProfesorNicolasAvilanreview/>,
    },
    {
    path: "profesor/NormaSarmiento",
    element: <ProfesorNormaSarmiento/>,
    },
    {
    path: "profesor/NormaSarmiento/review",
    element: <ProfesorNormaSarmientoreview/>,
    },
    {
    path: "profesor/PatriciaHernandez",
    element: <ProfesorPatriciaHernandez/>,
    },
    {
    path: "profesor/PatriciaHernandez/review",
    element: <ProfesorPatriciaHernandezreview/>,
    },
    {
    path: "profesor/PedroWightman",
    element: <ProfesorPedroWightman/>,
    },
    {
    path: "profesor/PedroWightman/review",
    element: <ProfesorPedroWightmanreview/>,
    },
    {
    path: "profesor/RafaelMendez",
    element: <ProfesorRafaelMendez/>,
    },
    {
    path: "profesor/RafaelMendez/review",
    element: <ProfesorRafaelMendezreview/>,
    },
    {
    path: "profesor/RicardoGarzon",
    element: <ProfesorRicardoGarzon/>,
    },
    {
    path: "profesor/RicardoGarzon/review",
    element: <ProfesorRicardoGarzonreview/>,
    },
    {
    path: "profesor/SandraOlaya",
    element: <ProfesorSandraOlaya/>,
    },
    {
    path: "profesor/SandraOlaya/review",
    element: <ProfesorSandraOlayareview/>,
    },
    {
    path: "profesor/SegioDuque",
    element: <ProfesorSegioDuque/>,
    },
    {
    path: "profesor/SegioDuque/review",
    element: <ProfesorSegioDuquereview/>,
    },
    {
    path: "profesor/StellaSierra",
    element: <ProfesorStellaSierra/>,
    },
    {
    path: "profesor/StellaSierra/review",
    element: <ProfesorStellaSierrareview/>,
    },
    {
    path: "profesor/TatianaCabrera",
    element: <ProfesorTatianaCabrera/>,
    },
    {
    path: "profesor/TatianaCabrera/review",
    element: <ProfesorTatianaCabrerareview/>,
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
    path: "materias/probabilidad1",
    element: <Materiasprobabilidad1/>,
    },
    {
    path: "materias/probabilidad1/repositorio",
    element: <Materiasprobabilidad1Repositorio/>,
    },
    {
    path: "materias/teoriaGrafos",
    element: <MateriasteoriaGrafos/>,
    },
    {
    path: "materias/teoriaGrafos/repositorio",
    element: <MateriasteoriaGrafosRepositorio/>,
    },
    {
    path: "materias/variableCompleja",
    element: <MateriasvariableCompleja/>,
    },
    {
    path: "materias/variableCompleja/repositorio",
    element: <MateriasvariableComplejaRepositorio/>,
    },
    {
    path: "materias/ecuacionesDiferenciales",
    element: <MateriasecuacionesDiferenciales/>,
    },
    {
    path: "materias/ecuacionesDiferenciales/repositorio",
    element: <MateriasecuacionesDiferencialesRepositorio/>,
    },
    {
    path: "materias/analisisReal",
    element: <MateriasanalisisReal/>,
    },
    {
    path: "materias/analisisReal/repositorio",
    element: <MateriasanalisisRealRepositorio/>,
    },
    {
    path: "materias/probabilidad2",
    element: <Materiasprobabilidad2/>,
    },
    {
    path: "materias/probabilidad2/repositorio",
    element: <Materiasprobabilidad2Repositorio/>,
    },
    {
    path: "materias/keystone",
    element: <Materiaskeystone/>,
    },
    {
    path: "materias/keystone/repositorio",
    element: <MateriaskeystoneRepositorio/>,
    },
    {
    path: "materias/topologia",
    element: <Materiastopologia/>,
    },
    {
    path: "materias/topologia/repositorio",
    element: <MateriastopologiaRepositorio/>,
    },
    {
    path: "materias/mathModel",
    element: <MateriasmathModel/>,
    },
    {
    path: "materias/mathModel/repositorio",
    element: <MateriasmathModelRepositorio/>,
    },
    {
    path: "materias/analisisEstadistico",
    element: <MateriasanalisisEstadistico/>,
    },
    {
    path: "materias/analisisEstadistico/repositorio",
    element: <MateriasanalisisEstadisticoRepositorio/>,
    },
    {
    path: "materias/redesComputadores",
    element: <MateriasredesComputadores/>,
    },
    {
    path: "materias/redesComputadores/repositorio",
    element: <MateriasredesComputadoresRepositorio/>,
    },
    {
    path: "materias/algebraAbstracta",
    element: <MateriasalgebraAbstracta/>,
    },
    {
    path: "materias/algebraAbstracta/repositorio",
    element: <MateriasalgebraAbstractaRepositorio/>,
    },
    {
    path: "materias/anlisisNumCom",
    element: <MateriasanlisisNumCom/>,
    },
    {
    path: "materias/anlisisNumCom/repositorio",
    element: <MateriasanlisisNumComRepositorio/>,
    },
    {
    path: "materias/operatingSystems",
    element: <MateriasoperatingSystems/>,
    },
    {
    path: "materias/operatingSystems/repositorio",
    element: <MateriasoperatingSystemsRepositorio/>,
    },
    {
    path: "materias/geometria",
    element: <Materiasgeometria/>,
    },
    {
    path: "materias/geometria/repositorio",
    element: <MateriasgeometriaRepositorio/>,
    },
    {
    path: "materias/capstone",
    element: <Materiascapstone/>,
    },
    {
    path: "materias/capstone/repositorio",
    element: <MateriascapstoneRepositorio/>,
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





