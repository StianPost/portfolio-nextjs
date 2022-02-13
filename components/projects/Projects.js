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

export default function Projects() {
  return (
    <>
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
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-1.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-2.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-3.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-4.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-5.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-6.jpg' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
