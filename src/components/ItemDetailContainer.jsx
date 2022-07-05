
import React, {useEffect, useState} from "react"
import { useParams } from 'react-router-dom';
import {ItemDetail} from "./ItemDetail";


function ItemDetailContainer() {

const [item, setItem] = useState({})
const [loading, setLoading] = useState (true)
const { id } = useParams()

useEffect(() => {
  const mock = [
    {id: 1, title: "God of War", precio: 60, pictureURL: "https://img.g2a.com/323x433/1x1x0/god-of-war-pc-steam-key-global/98c4f59fc39f44aaa432445e", stock: 5},
    {id: 2, title: "F1 22", precio: 40, pictureURL: "https://img.g2a.com/323x433/1x1x0/f1-22-pc-origin-key-global/8e1067842b5947abbef4ca36", stock: 10}, 
    {id: 3, title: "Grand Theft Auto V", precio: 10, pictureURL: "https://img.g2a.com/323x433/1x1x0/grand-theft-auto-v-premium-online-edition-rockstar-key-global/5d14729446177c656b5211b2", stock: 3}, 
    {id: 4, title: "Red Dead Redemption 2", precio: 99, pictureURL: "https://img.g2a.com/323x433/1x1x0/red-dead-redemption-2-rockstar-key-global/5bc41691ae653a49fd7f4e1b", stock: 20}, 
  ]

  new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(mock)
    }, 2000)
}).then(res => {
    const item = res.find((item) => item.id ===  Number(id))
    setItem(item)
    setLoading(false)
})

  
}, [id])


  return (
    <div className="item-container">
        {loading ? <h1>loading...</h1> : <ItemDetail {...item} />}

    </div>
  )
}
export default ItemDetailContainer