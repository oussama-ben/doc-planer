import React from 'react';
import logo from './logo.jpg';


function Intro() {
return (
    <div>
      
      <img className="image2" src={logo}  alt="puce" />
      <h1 className="titre">Making the healthcare experience more human</h1><br></br><br></br>
      <div className="intro">
      <p className="parag1">We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable,
           and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.</p>
      <p className="parag2">We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence,
           but also to devote their time to what really matters: their patients.</p>
           </div>
      </div>
      );
      }
export default Intro;