import React from 'react'

export default function Item({productos}) {
  return (
    <div key={productos.id}>
    <h1> {productos.name}</h1>
    <div>
        <p>
            el producto {productos.name} con el id {productos.id} tiene un valor de: {productos.value}
        </p>
    </div>
    </div>
    )
}
