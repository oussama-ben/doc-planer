import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col} from 'reactstrap';
 
 
  const Exemple1 = ({item}) => {
    return (<Card className="cart1" style={{backgroundColor:item.color}}>
          
          <CardBody>
         
            <CardTitle>{item.titre1}</CardTitle>
            <h2 className="desc1">{item.titre}</h2>
       {   item.show ? <Button>Choose a Country</Button>:<div></div>}
          </CardBody>
          <img className="image3" src={item.img}  alt="image3" />
        </Card>
      
  
  
    
      
    )
  }
  export default Exemple1