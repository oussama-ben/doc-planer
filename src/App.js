import React from 'react';
import './App.css';


import Example from './navbar' ;
import Paragraph from './paragraph';
import Exemple from './part1';
import Appli from './part2';
import Appli1 from './part3';
import Appli2 from './part4';
import Exemple3 from './part5';
import Footer from './footer';


function App() {
  return (
    <div className="App">
    <Example/>
    <Paragraph/>
    <Exemple/><br></br><br></br>
    <Appli/><br></br><br></br>
    <Appli1/><br></br><br></br>
    <Appli2/>
    <Exemple3/>
    <Footer/>
   
   </div>
  );
  
}

export default App;
