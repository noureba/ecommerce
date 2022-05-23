import React,{useContext, useState} from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import Stars from "react-stars";
import Link from "next/link";
import Products from "../../components/products"
import buttonStyle from "../../styles/css/buttons.module.css";
import {Store} from '../../utils/store'

export async function getStaticPaths(){
  const req = await fetch("https://fakestoreapi.com/products")
  const data = await req.json()

  const paths = data.map((product) => ({
    params: { id: product.id.toString()},
  }))

  return{
    paths,
    fallback: false 
  }

}

export async function getStaticProps({ params }){
  const allPro = await fetch(`https://fakestoreapi.com/products`)
  const products = await allPro.json()
  const pro = await fetch(`https://fakestoreapi.com/products/${params.id}`)
  const product = await pro.json()

  return{
    props:{products, product}
  }
}


function Product({products, product}) {
  const {cartItems, setCartItems} = useContext(Store)
  const [qunty , setQnty] = useState(1)

  const add = (pro, count) => {
    const exist = cartItems.find((item) => {
      return item.id === pro.id;
    });
    if (exist) {
      setCartItems(
        cartItems.map((item) => {
          return item.id === exist.id
            ? { ...exist, qnty: exist.qnty + 1 }
            : item;
        })
      );
    } else {
      setCartItems([ ...cartItems, { ...pro, qnty: count }]);
    }
  };
  const relatedProducts = products.filter((pro)=>{
    return pro.category ==  product.category
  })



  return (
    <Layout title={product.title}>
      <div>
          <div key={product.id}>
            <div className="d-flex flex-row flex-wrap justify-content-around py-5 px-3">
              <div>
                <Image
                  src={product.image}
                  height="500"
                  width="500"
                  alt={product.title}
                />
              </div>
              <div className="width">
                <p>
                  <Link href="/" passHref>
                    <a>Home</a>
                  </Link>
                  /
                  <Link href="/products" passHref>
                    <a>Products</a>
                  </Link>
                  /
                  <Link href="#" passHref>
                    <a>{product.category}</a>
                  </Link>
                </p>
                <h1>{product.title}</h1>
                <div className="d-flex flex-row justify-content-start align-items-center">
                  <Stars
                    value={product.rating.rate}
                    edit={false}
                    count={5}
                    size={25}
                    color2={"#ffd700"}
                  />

                  <p className="my-1 mx-2"> count: {product.rating.count}</p>
                </div>
                <p className="text-success fs-4">{product.price}$</p>
                <input className="p-2 mx-2" placeholder="1" type="number" max= "100" min="1" onChange={(e)=> setQnty(e.target.value)}/>
                <button className={`${buttonStyle.button}`} onClick={()=> add(product, qunty)}>Add To Cart</button>
                <p className="py-3">category: {product.category}</p>
              </div>
            </div>
            <div className="p-4 border-top ">
              <p className="fw-bold">Description:</p>
              <p>{product.description}</p>
            </div>
          </div>
      </div>
      <div className="border-top ">
        <p className="fw-bold m-5">Related products</p>
        <Products data={relatedProducts}/>
      </div>
    </Layout>
  );
}

export default Product;
