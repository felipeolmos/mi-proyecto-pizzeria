import React from 'react'
import Header from './Header'
import CardPizza from './CardPizza'

const Home = () => {
  return (
    <>
    <Header  titulo="¡Pizzeria Mamma Mía!" descripcion="¡Tenemos las mejores pizzas que podras encontrar!" />
    <main className="d-flex">
  <CardPizza
       image="https://images.pexels.com/photos/774487/pexels-photo-774487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
       name="Napolitana"
       desc="Ingredientes:
       mozzarella, tomates, oregano" 
       price="Precio: 10.990"   
  />
    
    <CardPizza
       image="https://media.istockphoto.com/id/938742222/es/foto/pizza-de-pepperoni-cheesy.jpg?s=1024x1024&w=is&k=20&c=aSvYk7dHK_AjTt0YJLQwWDk2wf8MJlonLhRKWzlprz8="
       name=""
       desc="" 
       price="Precio: 10.990"
       
  />
   <CardPizza
       image="https://images.pexels.com/photos/3644/pizza-restaurant-dinner-lunch.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
       name=""
       desc="" 
       color="success"
  />
  <CardPizza
       image="https://images.pexels.com/photos/803290/pexels-photo-803290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
       name=""
       desc="" 
       color="success"
  />
  </main>
    
    </>
  )
}

export default Home
