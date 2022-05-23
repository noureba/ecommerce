import React from "react";
import { slidrImg } from "../utils/data";
import SwiperCore, { Autoplay } from 'swiper';
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function Slider() {

    SwiperCore.use([Autoplay])

  return (
    <div className="text-center" data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000" data-aos-once="true">
      <Swiper
      autoplay={{ delay: 3000 }}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
          <SwiperSlide >
            <Image
              src="https://res.cloudinary.com/dia3y316g/image/upload/v1653125844/ecommerce/slider/5447851_sde5d9.jpg"
              alt=""
              width="1400"
              height="500"
            />
          </SwiperSlide>
      </Swiper>
    </div>
  );
}
