import React, { useContext } from "react";
import { Store } from "../utils/store";
import Link from "next/link";
import Image from "next/image";
import ButtonStyles from "../styles/css/buttons.module.css";
import Stars from "react-stars";

function Products(props) {

  return (
    <div
      data-aos="fade-up"
      data-aos-once="true"
      className="d-flex flex-row flex-wrap justify-content-center aling-items-center my-5"
    >
      {props.data.map((product) => (
        <div key={product.id} className={`widthPro border m-1 p-3 `}>
          <Link href={`/products/${product.id}`} passHref>
            <div>
              <Image
                src={product.image}
                width="500"
                height="500"
                alt={product.title}
              />
            </div>
          </Link>
          <Link href={`/products/${product.id}`} passHref>
            <h1 className={`fs-5`}>{product.title.substring(0, 30)}...</h1>
          </Link>
          <div className="d-flex flex-row justify-content-start align-items-center">
            <Stars value={product.rating.rate} edit={false} size={25} />

            <p className="my-1 mx-2">{product.rating.count}</p>
          </div>

          <p className={`text-success fs-5`}>{product.price} $</p>

        </div>
      ))}
    </div>
  );
}

export default Products;
