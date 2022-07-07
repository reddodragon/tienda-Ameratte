import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import {CartContext} from '../context/CartContext'
import { Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';







export default function Cart() {

    
    const {cart, removeItem, cartClear, importeTotal} = useContext(CartContext);
    console.log(JSON.stringify(cart));   


    /*function createData(pictureURL, title, price, subtotal, cantidad) {
      return { pictureURL, title, price, subtotal,  cantidad };
    }*/
	

  return (
    <>

    <div className="divCart">
      <Typography  style={{color:'#1976D2', textAlign:'center', margin:'2rem'}} variant="h4"> Carrito </Typography>

      <TableContainer component={Paper} sx={{ width:9/10, borderRadius:'15px' }}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Producto</TableCell>
            <TableCell align="right">Precio Unitario</TableCell>
            <TableCell align="right">Cantidad agregada</TableCell>
            <TableCell align="right">Precio Total</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map(({id, precio, title, quantity}) => (
			
            <TableRow
              key={id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
			  
            >

              <TableCell align="right">{title}</TableCell>
              <TableCell align="right">{precio}</TableCell>
              <TableCell align="right">{quantity}</TableCell>
              <TableCell align="right">{quantity * precio}</TableCell>
              <TableCell align="right"><Button variant="contained" onClick={()=>{removeItem(id)}} > <DeleteForeverIcon/> </Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        <div className="divFinalizarCompra">
          <Typography style={{color:'#1976D2', textAlign:'center'}} variant="h5">
            Importe total  $ { importeTotal() }
          </Typography>
          <Stack spacing={2} direction="row">
            <Button variant="contained">Finalizar compra</Button>
            <Button variant="outlined" onClick={()=>{cartClear()}} > Vaciar carrito</Button>
          </Stack>
        </div>

    </div>

    </>
  );


    
}