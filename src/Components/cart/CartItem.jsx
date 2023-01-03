import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import React from 'react'
import { Button } from '@mui/material';

const CartItem = ({item, handleCartUpdate, handleRemove}) => {
  

  return (
    <Card sx={{ display: 'flex' }}>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h5">
         {item.name}
        </Typography>
        <Typography variant="subtitle1" color="black" component="div">
         Price: {item.price.formatted_with_symbol}
        </Typography>
      </CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        <IconButton aria-label="delete" onClick={() => handleCartUpdate(item.id, item.quantity - 1)}>
           <RemoveIcon /> 
        </IconButton>
        <div>{item.quantity}</div>
        <IconButton aria-label="add" onClick={() => handleCartUpdate(item.id, item.quantity + 1)}>
         <AddIcon/>
        </IconButton>
        <Button type='button' color='secondary' onClick={()=> handleRemove(item.id)}>Remove</Button>
      </Box>
    </Box>
    <CardMedia
      component="img"
      sx={{ width: 151 }}
      image={item.image.url}
      alt=""
    />
  </Card>
  )
}

export default CartItem