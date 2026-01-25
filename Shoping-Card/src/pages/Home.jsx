import React from 'react'
import { ProductList } from '../components/ProductList'

export const Home = () => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Shop Products</h1>
     <ProductList/>
    </div>
  )
}
