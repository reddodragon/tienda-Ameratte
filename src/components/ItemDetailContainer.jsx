
import React, {useEffect, useState} from "react"
import { useParams } from 'react-router-dom';
import {ItemDetail} from "./ItemDetail";
import { doc, getDoc, getFirestore } from 'firebase/firestore';


function ItemDetailContainer() {

const [item, setItem] = useState({})
const [loading, setLoading] = useState (true)
const { id } = useParams()

useEffect(() => {
  async function getItem() {
    const db = getFirestore();
    const product = doc(db, 'Productos', id)

    let details = getDoc(product).then((res) => {
      setItem({ ...res.data(), id: res.id })

    })

    await details
    setLoading(false)

  }
  getItem()
  
}, [id])


  return (
    <>
        {loading ? <h1>loading...</h1> : <ItemDetail {...item} />}

    </>
  )
}
export default ItemDetailContainer