import React, {useState, useEffect} from 'react';
import CProducts from './ChairProducts';
import './style.css';




const Products = ({products, onAddToCart}) => {


    
    const filtered = products.filter(chair => chair.categories[0].name === 'Chairs');
    const [background, setBackground] = useState(false);

    useEffect(()=>{

      const pics = document.querySelectorAll('.pics')
      pics.forEach((el) => {
        const image = el.querySelector('img')
          image.addEventListener('mouseenter', (e) => {
           setBackground(image.getAttribute('src'))   
          })
        })

    },[])

  return (
    <>
    <div className='flex pt-10 '>
        <div className=' store w-6/12 h-screen box-border bg-black'>
        <div style={{display: 'grid', gridTemplateColumns:'1fr 1fr'}} >
            {filtered.map(product =>{
            
                return (<div className='pics' item key = {product.id} style={{display: 'flex', padding: '1em'}}>
                        <CProducts product={product} onAddToCart = {onAddToCart}/>
                       </div>) 
            })}
         </div>
         </div> 
         <div className='preview w-6/12 h-screen box-border grid' style={{backgroundImage: `url(${background})`, backgroundSize:'cover'}}>
    
         </div>
    </div>
    
    </>

    
  )
}

export default Products