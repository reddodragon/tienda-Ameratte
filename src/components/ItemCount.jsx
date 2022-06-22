import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ButtonGroup } from '@mui/material';
import { Container } from '@mui/system';


const ItemCount = ({ stock, initial, onAdd}) => {

    const [btnClick, setBtnClick] = useState(initial)

    const clickSum = () => {
        if(btnClick >= stock){
            return
        }
        setBtnClick(btnClick + 1)
    }

    const clickRes = () => {
        if(btnClick === 0){
            return
        }
        setBtnClick(btnClick - 1)
    }

    

  return (
    
    <div className="container-button">
        <Card sx={{ maxWidth: 300, mt:3, ml:3 }}>
            <CardContent>
                <Typography variant="h3" component="div">
                  Product title
                </Typography>
                <Typography variant="body2">
                Lorem ipsum dolor sit amet.
                <br />
                {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions sx={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center',                                      
                }}>
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button variant='contained' size="small" color="secondary" onClick={clickRes}>-</Button>               
                     <Container>{btnClick}</Container>
                    <Button variant='contained' size="small" color="secondary"  onClick={clickSum} >+</Button> 
                    </ButtonGroup>
                <Button  onClick={() => onAdd(btnClick)} sx={{mt:3}} variant='outlined'>add to cart</Button>
            </CardActions>
        </Card>
    </div>
  )
}

export default ItemCount