import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {slideData} from './slider-data'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";



export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
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

       <div className="slider">
             {
              slideData.map(({id, heading, image, desc}, ) => {
                return(
                  <SwiperSlide key={id} className="slide">
                    <img src={image} alt=""/>

                    <div className="content">
                        <h2 className="animate">{heading}</h2>
                        <p>{desc}</p>
                        <button className="btn-primary">Learn More</button>
                    </div>
                  </SwiperSlide>
                )
              })
            }
    
        </div>
      </Swiper>
    </>
  );
}