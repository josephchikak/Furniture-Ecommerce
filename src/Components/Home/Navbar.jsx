import React from 'react'
import chairs from '../furniture assets/Chair/olena-sergienko-gxKL334bUK4-unsplash.jpg';
import couch from '../furniture assets/Couch/phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg';
import { HashLink  } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {gsap} from "gsap";
import "./home.css";
import { IconButton,Badge } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';


const Navbar = ({totalItems}) => {
const [active, setActive] = useState(false)

const handleActive =() =>{
  setActive(!active)

  gsap.from('.nav', {x: '-100%', ease: 'power1.out'})

}

    useEffect(()=>{

      const nav = document.querySelectorAll('.nav')
      nav.forEach((n) =>{
        n.addEventListener('click', (e) => {
          gsap.to(nav, {color: '#black'});

          if (n === document.activeElement){
             gsap.to(n, {color:'#7D2E68'});
          }
      })
      })

        const navs = document.querySelectorAll('.navS')
        navs.forEach((el) => {
          const image = el.querySelector('img')
    
            el.addEventListener('mouseenter', (e) => {
              gsap.to(image, { autoAlpha: 1 })
            })
            
             el.addEventListener('mouseleave', (e) => {
              gsap.to(image, { autoAlpha: 0 })
            })
            
            el.addEventListener('mousemove', (e) => {
              gsap.set(image, { x: e.offsetX - 200 })
            })
        })
     
      },[])

  return (
    <div>

      <nav id="navigation">
          <div id='mobileNav' onClick={handleActive}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
            </svg>
          </div>
          <ul id={!active ? "navs" : "mobileNavs"}>
            <li className="nav "> <Link to='/Furniture-Ecommerce/#home'>Home </Link></li>
            <div className="nav" id='collection'> Collection
              <div className="dropdown">
                <li className="navS " > <Link to="/Furniture-Ecommerce/chairs">Chairs</Link>
                  <img className="pic" src={chairs} alt=""/>
                </li>
                <li className="navS "> <Link to="/Furniture-Ecommerce/sofas">Sofas</Link>
                <img className="pic"  src={couch} alt=""/>
                
                </li>
              </div>
            </div>
            <li className="nav"> <HashLink to='/Furniture-Ecommerce/#new'>New</HashLink></li>
            <li className="nav"> <HashLink to='/Furniture-Ecommerce/#about'>About</HashLink></li>
          </ul>
          <IconButton id='cart' color='inherit'>
            <Link to={'/Furniture-Ecommerce/cart'}>
                <Badge id='badge' badgeContent={totalItems} color='secondary'>
                    <ShoppingCart/>
                </Badge>

            </Link>
          </IconButton>
      </nav>
   
    </div>
  )
}

export default Navbar