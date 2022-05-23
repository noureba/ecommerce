import React from "react";
import Link from "next/link";
import Image from "next/image";
import footerStyle from "../styles/css/footer.module.css";

function Footer() {
  return (
    <div>
      <div className={`${footerStyle.footer} p-3`}>
        <div
          className={` p-3 ${footerStyle.about}`}
          data-aos="fade-right"
          data-aos-once="true"
        >
          <Link href="/" passHref>
            <a className={`light fs-1 fw-bold py-2`}>
              <Image
                src="https://res.cloudinary.com/dia3y316g/image/upload/v1653045016/ecommerce/logo_whffzt.png"
                alt=""
                width="100"
                height="50"
              />
            </a>
          </Link>
          <p className={`py-2 `}>
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div
          className="d-flex flex-column p-3"
          data-aos-once="true"
          data-aos="fade-left"
        >
          <Link href="/products" passHref>
            <a className={`light py-2`}>store</a>
          </Link>
          <Link href="/about" passHref>
            <a className={`light py-2`}>About us</a>
          </Link>
          <Link href="/contact" passHref>
            <a className={`light py-2`}>Contact us</a>
          </Link>
        </div>
        <div
          className="d-flex flex-column p-3"
          data-aos-once="true"
          data-aos="fade-left"
        >
          <Link href="/products" passHref>
            <a className={`light py-2`}>Terms and conditions</a>
          </Link>
          <Link href="/about" passHref>
            <a className={`light py-2`}>Payment and shipping policy</a>
          </Link>
          <Link href="/contact" passHref>
            <a className={`light py-2`}>Return policy</a>
          </Link>
        </div>
      </div>
      <div className={`p-2 flex-wrap d-flex flex-row justify-content-around align-items-center border-top`}>
        <p className="">All Rights Reserved © 2022</p>
        <div className="">
          <Image
            src="/../public/img/paymentMethods.png"
            alt="payment methods"
            width="200"
            height="50"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
