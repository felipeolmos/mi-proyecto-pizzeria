import Card from 'react-bootstrap/Card';



const CardPizza = ({image, name, desc, price}) =>{
    return(
        <div className="cards-container">
            <Card className="card-custom">
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                  {desc}
                </Card.Text>
                <Card.Text>
                  {price}
                </Card.Text>
              </Card.Body>
              
            </Card>
            
        </div>
        
    )
};
export default CardPizza;