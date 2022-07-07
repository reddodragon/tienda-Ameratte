import React from 'react'
import Item from './Item'

export default function ItemsLayout({productos}) {
  return (
    <>
        {productos.map((productos) => {return(
          <Item productos={productos}></Item>
        )})}
    </>
  )
}
