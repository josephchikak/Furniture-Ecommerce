import React from 'react'
import { Button, TextField, Typography } from '@mui/material'
import './footer.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const Footer = () => {

  

  const theme = createTheme();

theme.typography.h2 = {
  '@media (width <= 600px)': {
    fontSize: '1.5rem',
  },
  '@media (width > 600px)': {
    fontSize: '2rem'
  }

}



  return (
    <>
    <div className='footer'>
   <ThemeProvider theme={theme}>
    <Typography variant='h2'>Subscribe to our newsletter</Typography>
    <div id='email' style={{display: 'flex', alignItems:'center', paddingTop:"1rem"}}>
        <TextField
            id="outlined-name"
            label="Email"
            sx={{width: '400px', marginRight: '10px'}}
            />
            <Button type='submit' variant='contained' sx={{padding: '10px'}}>
                SUBSCRIBE
            </Button>
        </div>
      </ThemeProvider>
    
    <div id='right'>© 2022 NENRIT ALL RIGHTS RESERVED</div>

    </div>
   
    </>
    
  )
}

export default Footer