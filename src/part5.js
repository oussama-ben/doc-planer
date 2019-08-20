import React from 'react';

  import Exemple2 from './item'
  import { Container, Row, Col} from 'reactstrap';
  
  const tab=[
    {
      titre1:'Barcelona',
      
      img:require('./barcelona.png'),
    },

   { titre1:'warsaw',
  img:require('./warsaw.png'),

},
{ titre1:'istanbul',
  img:require('./istanbul.png'),

},
{ titre1:'curitiba',
  img:require('./curitiba.png'),

},
{ titre1:'mexico-city',
  img:require('./mexico-city.png'),

},
{ titre1:'rome',
  img:require('./rome.png'),

},
  ]

const Exemple3 = () => {
  return (<Container >
  <Row>
    {tab.map((el,index)=><Exemple2 key={index}  item= {el}/>)}
</Row>
</Container>  )
    }

export default Exemple3;