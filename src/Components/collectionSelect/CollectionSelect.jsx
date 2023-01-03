import React, {useRef, useEffect} from "react";
import './collectionSelect.css'
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);





export default function CollectionSelect() {

     
    
  const contain = useRef();
  const tl = useRef();
  useEffect(()=> {

    let ctx = gsap.context(() => { 
      // gsap.from('#chairs', {
      //   scrollTrigger:{
      //     trigger: '#collectionSelect',
      //     start: 'top top',
      //     snap: {
          
      //                 snapTo: "labels", 
      //                 delay: 0.2, 
      //                 ease: "power1.inOut" 
      //               }
      //   },   duration: 1, opacity:0 , ease: 'power2.in'})
  
      // gsap.to('#collect', {duration: 1, y:'+200%', ease: 'sine.in',})

        tl.current = gsap.timeline({
            scrollTrigger: {
                trigger: "#collectionSelect",
                pin: true,   
                start: "top top", 
                end: "center bottom",
                scrub:1
                  },
              defaults: {duration: 1}
            })

        tl.current.from('#collect', {duration: 1.5, y:'+200%', ease: 'sine.in', delay:0.3})
       
    },contain)

     return () => ctx.revert();

},[])


  return (
    <>
        <div ref={contain} id="collectionSelect">
            <div id="chairs">
                    <div className='collection opacity-0'>
                    <Link to="/chairs"> <button className="btn rounded-md p-2"> CHAIRS</button> </Link>
                    </div>
            </div>

            <div style={{zIndex:10}}>
            <h1 id="collect" style={{transform:"rotate(90deg)", fontSize:'5em'}}> COLLECTION</h1>

            </div>
            <div id="sofas">
                <div className='collection2 opacity-0'>
                        <Link to="/sofas"> <button className="btn rounded-md p-2"> SOFAS</button> </Link>
                </div>
                    
             </div>
             <div className="borderr"></div>
          
        </div>
    </>
   
  );
}


