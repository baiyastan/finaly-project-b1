import React, {useEffect} from 'react'
import Banner from '../components/Banner/Banner'
import ProductList from '../components/ProductList/ProductList'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../redux/product/productSlice'

function Home() {
  const {products, loading, error, category} = useSelector((state)=> state.product)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProduct(category))
  }, [])

  console.log(products);
  
  return (
    <div>
      <Banner />
      <ProductList data={products}/>
    </div>
  )
}

export default Home
