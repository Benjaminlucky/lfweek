import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {slideData} from './slider-data'
import video from "../../video/lfs-video.mp4";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";



export default function App() {

  const [isVideoShowing, setIsVideoShowing] = useState(false)
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
                  <SwiperSlide key={id}>
                    
                  <div className="slide">
              
                 </div>

                     <video src={video} height="600" autoplay="true" loop="true" muted="true" className="video"/>
                    {/*<div className="content">
                        <h2 className="animate">{heading}</h2>
                        <p>{desc}</p>
                        <button className="btn-primary">Learn More</button>
                </div>*/}
                  </SwiperSlide>
                )
              })
            }

          
    
        </div>
      </Swiper>
    </>
  );
}