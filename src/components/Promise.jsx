import React, {useEffect, useState} from 'react'
import Itemslayout from './ItemContainer'

export default function MyPromise() { 

  const [productos, setProductos] = useState([])
   useEffect(() => {
    const productos = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {id:1, name:'zapatillas', value:399}, 
          {id:2, name:'remeras', value:400}, 
          
        ], 300);
      });
      });
      productos.then((resolve) =>{
          setProductos(resolve);
      }).catch((reject) =>{
        setProductos(reject);
      })
   }, [])
   
  return (
    <div>
      {productos && <Itemslayout productos={productos}/>}
    </div>
  )
}

