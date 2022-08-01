import React from "react";
import ItemCount from "./ItemCount"
import { Box } from '@mui/material'
import { useContext, useState } from 'react';
import { CartContext } from "../context/CartContext"


export const ItemDetail = (item) => {
    
    const { addItem, cantidadCart } = useContext(CartContext);

    const [addedToCart, setAddedToCart] = useState(false);
  
    const onAdd = (count) => {
      if (count > 0) {
        addItem({ ...item, quantity: count });
        setAddedToCart(!addedToCart);
      } else {
        alert('Error al agregar al carrito: la cantidad no puede ser 0')
      }
    }

  
    return (
    <Box container sx={{ display: 'flex', justifyContent: 'center', gap: 5, flexWrap: 'wrap', marginTop: 10 }}>

            <ItemCount
              stock={ cantidadCart(item.id) ? item.stock - cantidadCart(item.id) : item.stock }
              initial={ cantidadCart(item.id) === item.stock ? 0 : 1 }
              onAdd={onAdd}
              title={item.title} 
              precio={item.precio} 
              img={item.img}
            />

    </Box> 
    )
}



