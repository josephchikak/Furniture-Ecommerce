import React from "react";
import './about.css';
import aboutPic from '../furniture assets/michal-matlon-gZjGBbm_YXM-unsplash.jpg';



export default function About() {
  return (
    <>
        <div id="about">
            <div id="aboutText">
                <h2 style={{color: 'grey', fontSize: '20px'}}>About</h2>
                
                <p>We are committed to providing the marketplace with the highest quality chairs and sofas. We practice rigorous quality control at every stage of production, from design to assembly and shipment, and have implemented a quality management system.
                    We aim to “do it right the first time,” with a focus on developing a culture of continual improvement. This culture is fostered by maintaining a positive and productive work environment that promotes employee engagement and satisfaction.
                    The performance of our quality system is continually reviewed through monitoring and measurement of company performance indicators and regular management reviews.
                </p>
            </div>
            <picture id="aboutPic">
                <img src={aboutPic} alt=""/>
            </picture>
            <div className="borderrr"></div>
        </div>

    </>
   
  );
}


