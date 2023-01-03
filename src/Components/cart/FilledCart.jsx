import { Typography, Button, Grid} from '@mui/material'
import CartItem from './CartItem'
import {Link} from 'react-router-dom'



export const FilledCart = ({cart, handleCartUpdate, handleRemove, emptyCart}) => {
    console.log(cart)
    const handleCheckOut =() =>{
            fetch('https://furnitureapi-production.up.railway.app/create-checkout-session', {
            method: 'POST',
            headers:{
                 'Content-Type': 'application/json'
             },
           body: JSON.stringify({
           items: cart.line_items
        })
     }).then(res =>{
        if (res.ok) return res.json()
        return res.json().then(json => Promise.reject(json))
    }).then(({url}) =>{
        window.location = url
    }).catch(e =>{
        console.error(e.error)
    })   
    }
    
 
    return(
    <>  
        <div style={{height: '10vh'}}></div>
        <Grid>
            {cart.line_items.map((item) => (
                <Grid key={item.id} style={{padding: '5px'}}>
                    <CartItem item ={item} handleCartUpdate = {handleCartUpdate}
            handleRemove ={handleRemove}/>
                </Grid>
            ))}
        </Grid>
        <div style={{height: '100vh', paddingTop: '10px'}}>
            <Typography > Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
            <div style={{display:'flex', justifyContent:'space-between', paddingTop: '10px'}}>
                <Button onClick={emptyCart} variant='contained' color='primary'> Clear Cart</Button>
          <Link to='/'> <Button variant='contained' color='primary' onClick={handleCheckOut}> Check Out</Button> </Link>
            </div>
        </div>
    </>
 )}
 