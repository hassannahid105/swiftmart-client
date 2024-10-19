import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slider from "./Slider";

import bgImg1 from "../../assets/images/carousel1.jpg";
import bgImg2 from "../../assets/images/carousel2.jpg";
import bgImg3 from "../../assets/images/carousel3.jpg";

export default function Craousel() {
  return (
    <div className="container px-6 py-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slider image={bgImg1}></Slider>
        </SwiperSlide>
        <SwiperSlide>
          <Slider image={bgImg2}></Slider>
        </SwiperSlide>
        <SwiperSlide>
          <Slider image={bgImg3}></Slider>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
