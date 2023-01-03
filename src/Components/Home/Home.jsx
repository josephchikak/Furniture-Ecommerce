import React, { useRef } from "react";
import "./home.css";
import {gsap} from "gsap";
import { useLayoutEffect } from "react";
import CollectionSelect from "../collectionSelect/CollectionSelect";
import New from "../New/New";
import About from "../About/About";
import Testimony from "../Testimonies /Testimony";
import Footer from "../footer/Footer";




export default function Home() {

  const comp = useRef();

  useLayoutEffect(() => {

    const ctx = gsap.context(() =>{
      gsap.from(".name", {opacity:0, duration: 1, stagger:0.5, delay:0.5, ease: 'power1.in'});
      
  
    }, comp);

    return () => ctx.revert();
  },[])


  return (
    <>
    <div ref={comp} >
      <div id="home">
      <div style={{backgroundColor:'rgba(0,0,0,0.5', height: '100vh'}}> 
        <p className="name" >NENRIT</p> 
        <p  className="name">FURNITURES </p>
        <div className="animate-bounce" id='downArrow' style={{display:'flex', width:'100%', justifyContent: 'center'}}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"/>
        </svg>
      </div> 
      </div>
    </div>
    <CollectionSelect/>
    <New/>
    <About/>
    <Testimony/>
    <Footer/>
    </div>
    </>
  );
}


