import React from 'react'

export default function Cat({cat}) {
  return (
    <div>
    {cat.fact &&(
        <>
            <p>Hecho: {cat.fact}</p>
            
            <p>Largo: {cat.length}</p>
        </>
    )}
</div>
  )
}