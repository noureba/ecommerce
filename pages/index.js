import react from "react";
import Layout from "../components/Layout";
import Products from "../components/products";
import Slider from "../components/Slider";

export async function getStaticProps() {
  const req = await fetch("https://fakestoreapi.com/products");
  const data = await req.json();

  return {
    props: { data },
  };
}

export default function Home({ data }) {
  const LastProducts = data.slice(0, 8);
  return (
    <Layout title="Home">
      <Slider />
      <div className="my-5">
        <h1 className="px-5 fs-3 fw-bold">Last Products</h1>
        <Products data={LastProducts} />
      </div>
    </Layout>
  );
}
