import React from 'react';
import img1 from './leader.png';
import img2 from './visit.png';
import img3 from './patient.png';
import img4 from './doctor.png';
import img5 from './imageA.png';

function Appli1() {
    return (
        
          <div class="container1">
          <div className="svg2">
          <h1 className="titre3">The world's biggest healthcare platform</h1>
          
          <img className="img5" src={img5}  alt="puce" />
           <div class= "container2" >
           
          <div class="card" style={{ width : 300}}>
          <center><img className="img1" src={img1}  alt="puce" /></center>
            <div class="card-body">
              <h5 className="title1">Leader in 10 countries</h5>
              <p class="card-text"><small class="text-muted">Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile</small></p>
            </div>
          </div>

          <div class="card" style={{ width : 300}}>
          <center><img className="img2" src={img2}  alt="puce" /></center>
            <div class="card-body">
              <h5 className="title1">1.5 million appointments</h5>
              <p class="card-text"><small class="text-muted">booked last month</small></p>
            </div>
          </div>
          
          </div>
          
          <div class= "container3">
          <div class="card" style={{ width : 300}}>
          <center><img className="img3" src={img3}  alt="puce" /></center>
            <div class="card-body">
              <h5 className="title1">30 million unique patients</h5>
              <p class="card-text"><small class="text-muted">visit us every month</small></p>
            </div>
          </div>

          <div class="card" style={{ width : 300}}>
          <center><img className="img4" src={img4}  alt="puce" /></center>
            <div class="card-body">
              <h5 className="title1">2 million active doctors</h5>
              <p class="card-text"><small class="text-muted">trust in our solutions</small></p>
            </div>
          </div>
          </div>
         
              </div> 
              </div>
          
          );
          }
    export default Appli1;