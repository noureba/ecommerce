import React from 'react'
import Products from '../../components/products'
import Layout from '../../components/Layout'

export async function getStaticProps(){
  const req = await fetch("https://fakestoreapi.com/products")
  const data = await req.json()

  return{
    props:{data}
  }
}

function index({data}) {
  return (
    <Layout title="Products">
        <Products data={data}/>
    </Layout>
  )
}

export default index