import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../media/unsplash_EhTcC9sYXsw.png"
import img2 from "../media/unsplash_glRqyWJgUeY.png"
import img3 from "../media/unsplash_m_HRfLhgABo.png"
import img4 from "../media/unsplash_SYTO3xs06fU.png"


import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Swiper.css";

import { EffectCoverflow, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="swiper"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="swiper" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="swiper" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1}  alt="swiper"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2}  alt="swiper"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3}  alt="swiper" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="swiper" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="swiper" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
