import React, {useEffect, useState} from 'react'
import ItemsLayout from './ItemList'

export default function ItemListContainer() { 

  const [productos, setProductos] = useState([])
   useEffect(() => {
    const productos = new Promise((resolve, reject) => {

      setTimeout(() => {
        resolve([
          {id:1, name:'zapatillas', value:399, category:"nike"}, 
          {id:2, name:'remeras', value:400}, 
          {id:3, name:'Pantalones', value:40}, 
          
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

// let arrayFiltrado = productos.filter((item) => item.category === "nike")
//           setProductos(arrayFiltrado);