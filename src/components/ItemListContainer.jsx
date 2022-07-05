import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import ItemsLayout from './ItemList'
import Grid from '@mui/material/Grid';

export default function ItemListContainer() { 

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true);
  let {idCategory} = useParams();
   useEffect(() => {
    const productos = [
          {id: 1, cat:"1", title: "God of War", precio: 60, pictureURL: "https://img.g2a.com/323x433/1x1x0/god-of-war-pc-steam-key-global/98c4f59fc39f44aaa432445e", stock: 5},
          {id: 2, cat:"2", title: "F1 22", precio: 40, pictureURL: "https://img.g2a.com/323x433/1x1x0/f1-22-pc-origin-key-global/8e1067842b5947abbef4ca36", stock: 10}, 
          {id: 3, cat:"1", title: "Grand Theft Auto V", precio: 10, pictureURL: "https://img.g2a.com/323x433/1x1x0/grand-theft-auto-v-premium-online-edition-rockstar-key-global/5d14729446177c656b5211b2", stock: 3}, 
          {id: 4, cat:"1", title: "Red Dead Redemption 2", precio: 99, pictureURL: "https://img.g2a.com/323x433/1x1x0/red-dead-redemption-2-rockstar-key-global/5bc41691ae653a49fd7f4e1b", stock: 20}, 
        ]

      
      let categotyFilter = productos.filter((item) => item.cat === Number(idCategory))

		new Promise((resolve, reject) => {
			setTimeout(() => {
				if (idCategory === undefined){
					resolve(productos);
				} else {
					resolve(categotyFilter);
				}
			}, 2000);
		}).then((res) => {
			setProductos(res);
			setLoading(false);
		});
	}, [idCategory]);
  return (
      <Grid container  spacing={3}>
        <Grid item xs={3}>
          {loading ? <h1>loading...</h1> : productos && <ItemsLayout productos={productos}/>}
        </Grid>
      </Grid>
  )
}

// let arrayFiltrado = productos.filter((item) => item.category === "nike")
//           setProductos(arrayFiltrado);