import React from 'react';
import {Container, Typography} from '@mui/material'
import { FilledCart } from './FilledCart';






const Cart = ({cart, handleCartUpdate, handleRemove, emptyCart }) => {
 
 const Empty = () =>{
    return(
        <>
          <Container sx={{padding: '10px', marginTop: '20px'}}>
              <Typography variant='h6'> Your cart is empty add new items!</Typography>
         </Container>
        </>
      
    )
 }

 if(!cart.line_items)
 return "loading...."

  return (
    <>
    <Container sx={{color:'white'}}>
        <div style={{height: '10vh'}}></div>
        <Typography variant='h3'> Your Shopping Cart</Typography>
        {!cart.line_items.length ? <Empty/>
         : <FilledCart cart={cart}  handleCartUpdate = {handleCartUpdate}
            handleRemove ={handleRemove}
            emptyCart = {emptyCart}/>}
    </Container>
    </>
    

  )
}

export default Cart