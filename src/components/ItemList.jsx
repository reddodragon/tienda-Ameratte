import React from 'react'
import Item from './Item'
import { Box } from '@mui/material'

export default function ItemsLayout({productos}) {
  return (
    <Box container sx={{ display: 'flex', justifyContent: 'center', gap: 5, flexWrap: 'wrap', marginTop: 10 }}>
        {productos.map((productos) => {return(
          <Item productos={productos}></Item>
        )})}
    </Box>
  )
}
