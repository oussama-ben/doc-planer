import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col} from 'reactstrap';
  
 
 
  const Exemple2 = ({item}) => {
    return (<Card className="item1" style={{backgroundColor:item.color}}>
          
          <CardBody>
          <img className="it1" src={item.img}  alt="imag1" />
            <CardTitle>{item.titre1}</CardTitle>
            <h2 className="desc1">{item.titre}</h2>
           <Button>See Openings</Button>
          </CardBody>
         
         
         
        </Card>
      
  
  
    
      
    )
  }
  export default Exemple2