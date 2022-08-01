import React, { useContext, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import {CartContext} from '../context/CartContext'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';

import "./CheckOut.css"

export default function CheckOut() {
  const { cart, importeTotal, cartClear } = useContext(CartContext);
  const [nombre, setNombre] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  
  const [leyendaName, setLeyendaName] = useState('');
  const [errorName, setErrorName] = useState(false);

  const [leyendaTel, setLeyendaTel] = useState('');
  const [errorTel, setErrorTel] = useState(false);

  const [leyendaEmail, setLeyendaEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);


  let navigate = useNavigate();


    async function handleClickComprar() {
      const fecha = new Date();
      let auxCart = cart.map((item) => {
        let aux = {
          id: item.id,
          title: item.title,
          quantity: item.quantity,
          price: item.precio  ,
        };
        return { ...aux };
      });
      
      let pedido = {
        ticket: {
          name: nombre,
          phone: tel,
          mail: email,
        },
        cart: auxCart,
        total: importeTotal(),
        date: fecha,
      };
  
      if (nombre === '' || email === '' || tel === '' || cart.length === 0) {
        alert('Error, los campos o el carrito no pueden estar vacíos');
        return;
      }else{
        const db = getFirestore();
        const CollectionRef = collection(db, 'checkout');
        await addDoc(CollectionRef, pedido).then(({ id }) => alert('Su numero de compra es ' + id + '. Muchas gracias por su compra'));
  
        cartClear();
  
        return navigate('/');
      }
  
    }


    function onHandleChangeName(e) {
      setNombre(e.target.value)

      if(nombre.length > 30){
        setErrorName(true)
        setLeyendaName('El titulo contiene mas de 30 caracteres')
      }else{
        setErrorName(false)
        setLeyendaName('')
      }
    
  }


  function onHandleChangeTel(e) {
    setTel(e.target.value)

    if(isNaN(tel)){
      setErrorTel(true)
      setLeyendaTel('No es un numero de telefono valido')
    }else{
      setErrorTel(false)
      setLeyendaTel('')
    }
  
}

function onHandleChangeEmail(e) {
  setEmail(e.target.value)
  const emailRegex = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i
  if(emailRegex.test(e.target.value)){
    setErrorEmail(false)
    setLeyendaEmail('')
    
  }else{
    setErrorEmail(true)
    setLeyendaEmail('No es un numero de Email valido')
  }

}


  return (
    <div className="divCheckout">
      <Box  sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '70%',
        color: 'white',
        p:'20px'
      }}>
        <Typography variant="h3" component="h2">Complete para Finalizar su compra</Typography>
      <TextField label="Nombre" color="secondary" id="nombre" margin="normal"  onChange={onHandleChangeName} type={'name'} placeholder={'Ingrese su Nombre'} error={errorName} helperText={leyendaName}/>
        <TextField  color="secondary"id="telefono" margin="normal" label="Teléfono" onChange={onHandleChangeTel} type={'tel'} placeholder={'Ingrese su Telefono'} error={errorTel} helperText={leyendaTel}/>
        <TextField  color="secondary"id="email" margin="normal" label="Email" onChange={onHandleChangeEmail} type={'email'} placeholder={'Ingrese su Email'} error={errorEmail} helperText={leyendaEmail}/>
        <Button sx={{mt:'10px'}} size="large" color="success" variant="contained" margin="normal" type="submit" onClick={handleClickComprar} >
          Comprar
        </Button>

  

      </Box>
      </div>
  );
}