import React from 'react';
import './testimony.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import user1 from './undraw_female_avatar_re_l6cx.svg';
import user2 from './undraw_pic_profile_re_7g2h.svg';
import user3 from './undraw_profile_pic_re_iwgo.svg';
import Rating from '@mui/material/Rating';


const Testimony = () => {
    const test =[{name:'Sarah', image: user1, review: 'Amazing quality!'}, {name:'James', image:user2, review: 'Quick delivery and awesome customer service!'}, {name:'Sasha', image:user3, review: 'I got all my chairs from here, amazing quality and great service!'}]
  return (
    <div className='testimony'>
        <main className='testimonies'>
           {test.map(user => {
            return(
     
    <Card sx={{ maxWidth: 275, minWidth: 270, backgroundColor: '#ddd3c1', color:'black' }} key={user.name} className='testy'>
              <CardContent>
              <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={user.image}
                    alt="faces"
             />
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
               {user.name}
              </Typography>
              <Typography variant="h5" component="div">
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <Rating name="read-only" value={5} readOnly />
              </Typography>
              <Typography variant="body2">
               { user.review }
              </Typography>
            </CardContent>
          </Card>)
           })}
        </main>
    
   </div>
  )
}

export default Testimony