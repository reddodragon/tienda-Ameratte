import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const addItem = ( itm ) => {

    let newCart = [];

    if ( isInCart(itm.id) ) {
      
      newCart = cart.reduce((acc,item) => {
        if(itm.id !== item.id) {
          return acc.concat(item);
        } else {
          return acc.concat({ ...item, quantity: item.quantity + item.quantity });
        }
      }, []);

    } else {

      newCart = cart.concat(itm);

    }

    setCart(newCart);
    
  }

  const increaseItemQuantity = ({ id }) => {
    let newCart = [];
    newCart = cart.reduce((acc, item) => {
      if(id !== item.id) {
        return acc.concat(item);
      } else {
        return acc.concat({ ...item, quantity: item.quantity + 1});
      }
    }, []);
    setCart(newCart);
    
  }

  const removeItem = ( id ) => {
    const newCart = cart.filter( item => item.id !== id );
    setCart(newCart);
    
  }

  const decreaseItemQuantity = ({ id, quantity }) => {

    if (quantity === 1) {
      removeItem(id);
      return;
    }

    let newCart = [];
    newCart = cart.reduce((acc, item) => {
      if (id !== item.id) {
        return acc.concat(item);
      } else {
        return acc.concat({ ...item, quantity: item.quantity - 1 });
      }
    }, []);
    setCart(newCart);
    

  }

  const cartClear = () => {
    setCart([])
  };

  const isInCart = ( id ) => {
    return cart.some( item => item.id === id);
  }

  const quantityInCart = ( id ) => {
    const item = cart.find(item => item.id === id);
    if (item) {
      return item.quantity;
    }
    return 0;
  }


  const importeTotal = () => {
    return cart.reduce((acc, item) => {
      return acc + (item.quantity * item.precio)
    }, 0);
  }

  return (
    <CartContext.Provider value={{
      cart,
      addItem,
      removeItem,
      cartClear,
      quantityInCart,
      importeTotal,
      increaseItemQuantity,
      decreaseItemQuantity
    }}>
      { children }
    </CartContext.Provider>
  )

}