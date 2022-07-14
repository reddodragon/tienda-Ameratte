import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


export default function Item({productos}) {
  return (
    <>
        <Card sx={{ maxWidth: 345, mt:3, ml:3 }}>
        <CardContent>
            <CardMedia
                component="img"
                height="194"
                image={productos.img}
                alt={productos.title}
            />
            <Typography variant="h3" component="div">
                {productos.title}
            </Typography>
            <Typography variant="body2">
                Precio: ${productos.precio}
            </Typography>
            <Typography variant="body3">
                Stock disponible: {productos.stock}
            </Typography>

        </CardContent>
        <CardActions sx={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center',                                      
                }}>
            <Button component={Link} to={"/Item/"+productos.id} variant="contained" color="primary">Ver Detalles</Button>
        </CardActions>
        </Card>
    </>
    )
}
