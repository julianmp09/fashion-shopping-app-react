import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { productsData } from '../data/productsData'

export const Catalogue = () => {
  return (
    <>
      <ItemListContainer products={productsData} greeting={"hola"}/>
    </>
  )
}


