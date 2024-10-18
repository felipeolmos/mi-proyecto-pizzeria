import { Container, Row, Col } from "react-bootstrap"
import Header from './Header'
import CardPizza from './CardPizza'
import { pizzas } from '../assets/pizzas'
import { useState } from "react"

const Home = () => {
  const [cart, setCart] = useState([])

    const addToCart = (pizza) => {
        setCart((prev) => [...prev, pizza])
    }

  const mapeoPizzas = pizzas.map((pizza)=>{
    return(
      <Col key={pizza.id}>
      <CardPizza pizzasInfo={pizza} add={addToCart}  />
      </Col>
    )
  }) 
  return (
    <>
    <Header  titulo="¡Pizzeria Mamma Mía!" descripcion="¡Tenemos las mejores pizzas que podras encontrar!" />
    <main className="d-flex">
    <Container >
            <Row className="g-4" xs={1} md={2} lg={4}>
                {mapeoPizzas}
            </Row>
             {cart.map(pizzaCart => <li key={pizzaCart.id}>{pizzaCart.name}</li>)} 
        </Container>
    </main>
    
    </>
  )
}

export default Home
