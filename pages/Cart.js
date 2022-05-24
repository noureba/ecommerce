import React, { useContext } from "react";
import Layout from "../components/Layout";
import { Store } from "../utils/store";
import Image from "next/image";
import Link from "next/link";
import { AiFillDelete } from "react-icons/ai";
import buttonStyle from "../styles/css/buttons.module.css";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function Cart() {

  const { cartItems, setCartItems } = useContext(Store);

  const total = cartItems.reduce((initial, item) => {
    return initial + item.price * item.qnty;
  }, 0);

  const remove = (pro) => {
    const exist = cartItems.find((item) => {
      return item.id === pro.id;
    });

    if (exist) {
      setCartItems(
        cartItems.filter((item) => {
          return item.id !== pro.id;
        })
      );
    }
  };

  return (
    <Layout title="Cart">
      {cartItems.length == 0 ? (
        <p className="fs-2 fw-bold text-center p-5"> Cart is Empty</p>
      ) : (
        <div className="d-flex flex-wrap flex-row justify-content-center">
          <div className="p-2 w-75">
            <table className="table border ">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">title</th>
                  <th scope="col">qunty</th>
                  <th scope="col">price</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              {cartItems.map((item) => (
                <tbody key={item.id}>
                  <tr>
                    <td>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width="50"
                        height="50"
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.qnty}</td>
                    <td>{item.price * item.qnty}</td>
                    <td onClick={() => remove(item)}>
                      <AiFillDelete />
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
          <div className="border p-3 m-2">
            <p>Total Price : {total} $</p>
            <p>Shipping : Free</p>
            <p>Tax : 0%</p>
            <button className={`${buttonStyle.button}`}>
              <Link className="text-white" href="/Checkout" passHref>
                Chekout
              </Link>
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Cart;
