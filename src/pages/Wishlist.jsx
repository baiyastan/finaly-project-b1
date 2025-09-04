import React from 'react'
import { useSelector } from 'react-redux'

function Wishlist() {
  const {items} = useSelector((state) => state.favorite)

  console.log(items);
  
  return (
    <div>
      
    </div>
  )
}

export default Wishlist
