import React,{useEffect} from "react";
import Layout from "../components/Layout";
import Image from "next/image";

function About() {

  return (
    <Layout title="About">
      <div className="m-auto">
      <h1 className="text-center tw-bold my-5">About us</h1>
      <div className=" d-flex flex-row flex-wrap justify-content-around align-items-center py-5">
        <Image
          src="/../public/img/about.jpg"
          alt="about us"
          width="600"
          height="600"
          data-aos="flip-left"
          data-aos-once="true"
        />
        <p data-aos-once="true" data-aos="fade-up" style={{maxWidth:"500px"}} className="p-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
          <br/>
          <span className="fw-bold">the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </span>
        </p>
        
      </div>
      </div>
      
    </Layout>
  );
}

export default About;
