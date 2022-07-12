import React, {useEffect, useState} from 'react'
import {doc, getDocs, getFirestore} from 'firebase/firestore'

export default function TestConsulta() {

    const [item, setItem] = useState({})

    useEffect(() => {

        const db = getFirestore()

        const accion = doc(db, 'Productos', 'GKq5whanrUb0NHsVkQjI')
        getDocs(accion).then((res)=> {

            setItem({...res.data(), id: res.id})
            console.log('item',item)
        })
        
    }, [])

  return (
    <div>{item && <>{JSON.stringify(item)}</>}</div>
  )
}
