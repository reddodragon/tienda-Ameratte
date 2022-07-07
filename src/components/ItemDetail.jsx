import React from "react";
import ItemCount from "./ItemCount"
import { useContext, useState } from 'react';
import { CartContext } from "../context/CartContext"


export const ItemDetail = (item) => {
    
    const { addItem, quantityInCart } = useContext(CartContext);

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
    <>

            <ItemCount
              stock={ quantityInCart(item.id) ? item.stock - quantityInCart(item.id) : item.stock }
              initial={ quantityInCart(item.id) === item.stock ? 0 : 1 }
              onAdd={onAdd}
              title={item.title} 
              precio={item.precio} 
              img={item.pictureURL}
            />

    </> 
    )
}



