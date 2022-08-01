import React from 'react'
import Card from '@mui/material/Card';
import { Box } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


export default function Item({productos}) {
  return (
<Card>
<CardMedia
  component='img'
  height='200'
  image={ productos.img }
  sx={{ objectFit: 'cover' }}
/>
<CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '200px', gap: 2 }}>

  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
    <Typography variant='h6'>
      { productos.title }
    </Typography>
  </Box>

  <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: 'auto', gap: 1 }}>
    <Typography variant='h5'>
      $ {productos.precio}
    </Typography>
    
    <Button component={Link} to={"/Item/"+productos.id} variant="contained" color="secondary">Ver Detalles</Button>

    <Typography variant='body2'>
      Stock disponible: { productos.stock }
    </Typography>
  </Box>

</CardContent>
</Card>
    )
}
