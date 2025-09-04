import React from 'react'
import { useSelector } from 'react-redux'
import WishCard from '../components/wishCard/WishCard';

function Wishlist() {
  const {items} = useSelector((state) => state.favorite)

  console.log(items);
  
  return (
    <div>
      {
        items?.map((item) => (
          <WishCard key={item.id} />
        ))
      }
    </div>
  )
}

export default Wishlist
