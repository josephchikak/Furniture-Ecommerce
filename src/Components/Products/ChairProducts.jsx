import React from 'react'
import{ Card, CardContent, Typography, IconButton, CardActions} from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import './style.css';


const CProducts = ({ product, onAddToCart }) => {
  
  const pic = product.image.url;


  return (
    <Card className='root'>
       <picture className='prodPic'>
        <img src={pic} alt=''/>
       </picture>
       <CardContent>
          <div className='content'>
              <Typography variant='h5'>
                {product.name}
              </Typography>
              <Typography>
                {product.price.formatted_with_symbol}
              </Typography>
          </div>
       </CardContent >
       <CardActions disableSpacing >
          <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
              <AddShoppingCart/>
          </IconButton>
       </CardActions>
    </Card>
  )
}

export default CProducts;