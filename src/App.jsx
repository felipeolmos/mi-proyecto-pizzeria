import 'bootstrap/dist/css/bootstrap.min.css';
import CardPizza from "./components/CardPizza";
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import NavbarPizza from './components/NavbarPizza';

function App() {
 return (
  <>
  <div className="main-container">
  <NavbarPizza nombre="¡Pizzeria Mamma Mía!" />
  <Header  titulo="¡Pizzeria Mamma Mía!" descripcion="¡Tenemos las mejores pizzas que podras encontrar!" />
  <main className="d-flex">
  <CardPizza
       image="https://images.pexels.com/photos/774487/pexels-photo-774487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
       name="Napolitana"
       desc="Ingredientes:
       mozzarella, tomates, oregano" 
       price="Precio: 10.990"
       raza="Yorkshire"
       
  />
    
    <CardPizza
       image="https://media.istockphoto.com/id/938742222/es/foto/pizza-de-pepperoni-cheesy.jpg?s=1024x1024&w=is&k=20&c=aSvYk7dHK_AjTt0YJLQwWDk2wf8MJlonLhRKWzlprz8="
       name="LILA"
       desc="Lleno de energía y listo para jugar. !Dale a LILA el hogar amoroso que se merece!" 
       price="Precio: 10.990"
       raza="Pastor"
       
  />
   <CardPizza
       image="https://images.pexels.com/photos/3644/pizza-restaurant-dinner-lunch.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
       name="CLAUSS"
       desc="Lleno de energía y listo para jugar. !Dale a CLAUSS el hogar amoroso que se merece!" 
       color="success"
       raza="Labrador"
       
  />
  <CardPizza
       image="https://images.pexels.com/photos/803290/pexels-photo-803290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
       name="MEMO"
       desc="Lleno de energía y listo para jugar. !Dale a MEMO el hogar amoroso que se merece!" 
       color="success"
       raza="PITBULL"
       
  />
  </main>
  <Footer pie="© 2024 - Pizzería Mamma Mia! - Todos los derechos reservados"/>
  </div>
  </>
  
 );
  
}

export default App;
