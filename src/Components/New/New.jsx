import React from "react";
import "./new.css";
import { Link } from "react-router-dom";
import chair1 from '../furniture assets/tati-visual-w8ZvNb6YWkw-unsplash.jpg';
import chair2 from '../furniture assets/aung-myin-thu-EDdHTQcxzAE-unsplash.jpg';
import chair3 from '../furniture assets/Couch/kam-idris-wF9NH87U-2E-unsplash.jpg';


  
export default function New() {


  return (
    <>
      <div id="new">
        <h2 style={{padding:'1em', fontSize:'1em'}}> Latest Release</h2>
        <div id="newRelease">
               <picture className="chair">
                <img className="imag" src={chair1} alt="newChair1"/>
                <h3>Chair 1 </h3>
                <p> $200</p>
                <div className='buy opacity-0'>
                  <Link to='/chairs'> <button className="bg-black rounded-md p-2 " > SHOP NOW</button></Link> 
                </div>
                </picture>
            <picture className="chair">
                <img className="imag" src={chair2} alt="newChair2"/>
                <h3>Chair 1 </h3>
                <p> $250</p>
                <div className='buy opacity-0'>
                   <Link to='/chairs'> <button className="bg-black rounded-md p-2 "> SHOP NOW</button> </Link>
                </div>
            </picture>
            <picture className="chair" >
                <img className="imag" src={chair3} alt="newChair3"/>
                <h3>Chair 1 </h3>
                <p> $100</p>
                <div className='buy opacity-0'>
                    <Link to='/sofas'> <button className="bg-black rounded-md p-2" > SHOP NOW</button> </Link>
                </div>
            </picture>
        </div>
      </div>
    </>
  
  );
}


