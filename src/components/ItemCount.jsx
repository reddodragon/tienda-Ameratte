import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { ButtonGroup } from '@mui/material';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';


const ItemCount = ({ stock, initial, onAdd, title, precio, img}) => {

    const [itemCount, setItemCount] = useState(initial)

  const addItem = () => {
    if (itemCount < stock) {
      setItemCount(  Number(itemCount) + 1 );
    }
  }

  const removeItem = () => {
    if (itemCount > 0) {
      setItemCount( Number(itemCount) > 0 && Number(itemCount) - 1 );
    }
  }
  return (
    
    <div className="container-button">
        
        <Card sx={{ maxWidth: 300, mt:3, ml:3 }}>
            <CardContent>
                <CardMedia
                    component="img"
                    height="194"
                    image={img}
                    alt={title}
                />
                <Typography variant="h3" component="div">
                  {title}
                </Typography>
                <Typography variant="body2">
                    Precio: ${precio}
                </Typography>
                <Typography variant="body3">
                    Stock disponible: {stock}
                </Typography>
            </CardContent>
            <CardActions sx={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center',                                      
                }}>
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                        <Button variant='contained' size="small" color="secondary" onClick={removeItem}>-</Button>               
                        <Container>{itemCount}</Container>
                        <Button variant='contained' size="small" color="secondary"  onClick={addItem} >+</Button> 
                    </ButtonGroup>
                <Button  onClick={ ()=> {onAdd(itemCount)}} sx={{mt:3}} variant='outlined'>add to cart</Button>
                <br></br>
                <Button component={Link} to="/Cart" variant="contained" color="primary">Finalizar compra</Button>
            </CardActions>
        </Card>
    </div>
  )
}

export default ItemCount
