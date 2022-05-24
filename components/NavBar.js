import React, { useContext, useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import { Store } from "../utils/store";
import {
  AiOutlineShoppingCart,
  AiOutlineBars,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import mbileMenu from "../styles/css/mobileMenu.module.css";

function NavBar() {
  const { state, dispatch, cartItems } = useContext(Store);
  const [menu, setMenu] = useState(false);
  const menuHandel = () => {
    setMenu(!menu);
  };


  return (
    <div
      className={`d-flex p-3 flex-row justify-content-between border-bottom align-items-center`}
    >
      <div className={`${mbileMenu.mobileBarButton} fs-3`}>
        <i className="fs-1" onClick={menuHandel}>
          <AiOutlineBars />
        </i>
        <div
          className={`${
            mbileMenu.menuMobile
          } d-flex flex-column justify-content-start aling-items-start ${
            menu == false ? "show" : ""
          }`}
        >
          <i className="text-end p-3 fs-1" onClick={menuHandel}>
            <AiOutlineCloseCircle />
          </i>
          <Link href="/" passHref>
            <a className={`p-3 fs-5 border-top`}>Home</a>
          </Link>
          <Link href="/products" passHref>
            <a className={`p-3 fs-5 border-top`}>Products</a>
          </Link>
          <Link href="/About" passHref>
            <a className={`p-3 fs-5 border-top`}>About Us</a>
          </Link>
          <Link href="/Contact" passHref>
            <a className={`p-3 fs-5 border-top `}>Contact Us</a>
          </Link>
        </div>
      </div>
      <div className={`fs-3 fw-bold `}>
        <Link href="/" passHref>
          <a className="light"><Image src="https://res.cloudinary.com/dia3y316g/image/upload/v1653045016/ecommerce/logo_whffzt.png" alt="" width="100" height="50"/></a>
        </Link>
      </div>
      <div className={`d-flex flex-row align-items-center ${mbileMenu.menu}`}>
        <Link href="/" passHref>
          <a className={`mx-4 fs-5`}>Home</a>
        </Link>
        <Link href="/products" passHref>
          <a className={`mx-4 fs-5 `}>
            Products
          </a>
        </Link>
        <Link href="/About" passHref>
          <a className={`mx-4 fs-5 `}>
            About Us
          </a>
        </Link>
        <Link href="/Contact" passHref>
          <a className={`mx-4 fs-5 `}>
            Contact Us
          </a>
        </Link>
      </div>
      <div>
        <Link href="/Cart" passHref>
          
          <p  className="position-relative">
          <i className={`fs-3`}>
            <AiOutlineShoppingCart />
          </i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
              {cartItems.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
