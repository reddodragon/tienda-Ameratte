import React from 'react'
import Item from './Item'

export default function itemslayout({productos}) {
  return (
    <div>
        {productos.map((productos) => {return(
        <Item productos={productos}></Item>
        )})}
    </div>
  )
}
