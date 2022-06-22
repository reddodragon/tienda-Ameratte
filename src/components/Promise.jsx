import React, {useEffect, useState} from 'react'
import ItemsLayout from './ItemContainer'

export default function MyPromise() { 

  const [productos, setProductos] = useState([])
   useEffect(() => {
    const productos = new Promise((resolve, reject) => {

      setTimeout(() => {
        resolve([
          {id:1, name:'zapatillas', value:399}, 
          {id:2, name:'remeras', value:400}, 
          
        ], 2000);
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
      {productos && <ItemsLayout productos={productos}/>}
    </div>
  )
}

