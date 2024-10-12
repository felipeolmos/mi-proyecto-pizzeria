import 'bootstrap/dist/css/bootstrap.min.css';
import CardPizza from "./components/CardPizza";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import './App.css';
import NavbarPizza from './components/NavbarPizza';
import Login2 from './components/Login2';
import Register from './components/Register';

function App() {
 return (
  <>
  <div className="main-container">
  <NavbarPizza nombre="¡Pizzeria Mamma Mía!" home="Home" login="Login" register="Register" />
  {/* <Home /> */}
  {/* <Register/> */}
  <Login2 />
  
  <Footer pie="© 2024 - Pizzería Mamma Mia! - Todos los derechos reservados"/>
  </div>
  </>
  
 );
  
}

export default App;
