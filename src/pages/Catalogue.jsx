import React from 'react'
import { productsData } from '../data/productsData'
import { ItemListContainer } from '../components'


export const Catalogue = () => {
  return (
    <>
      <ItemListContainer products={productsData} greeting={"hola"}/>
    </>
  )
}


