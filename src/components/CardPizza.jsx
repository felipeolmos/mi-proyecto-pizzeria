import Card  from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";

const CardPizza = ({pizzasInfo, add}) =>{

  const ingredientesMap = pizzasInfo.ingredients.map(ingredients => <li key={ingredients}>{ingredients}</li>)
 
    return(
        <div className="cards-container">
            <Card className="card-custom">
              <Card.Img variant="top" src={pizzasInfo.img} />
              <Card.Body>
                <Card.Title>{pizzasInfo.name}</Card.Title>
                <Card.Text>
                  {pizzasInfo.desc}
                </Card.Text>
                <Card.Text>
                {new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(
                        pizzasInfo.price,
                    )}
                </Card.Text>
                
                <ul>
                    {ingredientesMap}
                </ul>
                <a className="btn btn-primary" href={`/pizza/${pizzasInfo.id}`}>ver más</a>
                <Button onClick={() => add(pizzasInfo)}>Agregar</Button>
              </Card.Body>
              
            </Card>
            
        </div>
        
    )
};
export default CardPizza;