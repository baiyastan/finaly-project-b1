import React from 'react'
import "./List.scss"
import Card from '../Card/Card'

function ProductList({data}) {
  return (
    <div className='list-card'>
      {
        data.map((item) => (
          <Card key={item.id} cart={item} />
        ))
      }
    </div>
  )
}

export default ProductList
