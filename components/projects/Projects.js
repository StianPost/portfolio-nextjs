import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import array from "../../projArray.json";
import { Projectheading, Projectinfo } from "./Projects.style";

export default function Projects() {
  return (
    <>
      <Projectheading>
        <h2>Projects</h2>
      </Projectheading>
      <Swiper
        modules={[Pagination, Navigation]}
        // NOTE: You don't need to pass true.
        grabCursor
        pagination
        navigation
        loop
        className="mySwiper"
      >
        {array.map(({ id, title, year, img, description }) => (
          <SwiperSlide key={id}>
            <Projectinfo>
              <p>{description}</p>
              <span>{year}</span>
            </Projectinfo>
            <img src={img} alt={title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
