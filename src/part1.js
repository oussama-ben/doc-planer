import React from 'react';

  import Exemple1 from './card'
  import { Container, Row, Col} from 'reactstrap';
  const tab=[
    {
      titre1:'For patients',
      titre:'Find a doctor, book a visit and solve any health-related doubt',
      img:require('./card1.png'),
      show:true,
      color:'#00b39b'
    },
   { titre1:'For doctors',
    titre:'Find a doctor, book a visit and solve any health-related doubt',
  img:require('./card2.png'),
   show:false,
  color:'#3d83df'
},
  ]

const Exemple = () => {
  return (<Container>
  <Row>
    {tab.map((el,index)=><Exemple1 key={index}  item= {el}/>)}
</Row>
</Container>  )
    }

export default Exemple;