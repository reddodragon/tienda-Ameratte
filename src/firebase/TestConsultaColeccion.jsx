
import React, {useEffect, useState} from 'react'
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'

export default function TestConsultaColeccion() {

    const [items, setItems] = useState([])

    useEffect(() => {

        const db = getFirestore()

        const collectionRef = query(collection(db, 'Productos'), where('categoria', '==', 'accion'))
        getDocs(collectionRef).then((res)=> {
            const myarray = res.docs.map(item => ({...item.data(), id: item.id}))
            setItems(myarray)
            //setItem({...res.data(), id: res.id})

        })
        
    }, [])

  return (
    <div>{items && <>{JSON.stringify(items)}</>}</div>
  )
}
