import React, { useRef, useState } from 'react';
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectFlip, EffectCreative, Pagination, Navigation } from 'swiper';
import array from '../../projArray.json';
import { Projectheading, Projectinfo } from './Projects.style';

export default function Projects() {
  return (
    <>
      <Projectheading>
        <h2>Projects</h2>
      </Projectheading>
      <Swiper
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative, Pagination, Navigation]}
        grabCursor={true}
        pagination={true}
        navigation={true}
        loop={true}
        className='mySwiper'>
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
