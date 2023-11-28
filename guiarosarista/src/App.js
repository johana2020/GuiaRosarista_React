import logo from './logo.svg';
import './App.css';
import Header from './componentes/header/header';
import nav_bar from './componentes/nav_bar/nav_bar';
import Inicio from './paginas/inicio/incio';
import Login from './paginas/sesion/i_s';

function App() {
  return (<>
  {/* 
  <Navbar/>
<Inicio/> */}
  <Header/>
  <Login/>
  </>
     );
}


export default App;
