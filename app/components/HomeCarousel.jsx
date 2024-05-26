'use client';

import { register } from 'swiper/element/bundle';
import Image from "next/image";
import 'swiper/css/autoplay';
import React from 'react';

register();

export default function HomeCarousel() {
  return (
    <swiper-container
      className="mySwiper"
      loop
      autoplay-delay="7000"
      autoplay-disable-on-interaction="false"
    >
      <swiper-slide>
        <Image alt="electrical box" fill src="/box.jpg" />
      </swiper-slide>
      <swiper-slide>
        <Image alt="electrical box" fill src="/locked.jpg" />
      </swiper-slide>
      <swiper-slide>
        <Image alt="AC electrical unit" fill src="/AC.jpg" />
      </swiper-slide>
      <swiper-slide>
        <Image alt="construction crane" fill src="/crane.jpg" />
      </swiper-slide>
      <swiper-slide>
        <Image alt="electrical cables" fill src="/cables.jpg" />
      </swiper-slide>
      <swiper-slide>
        <Image alt="overhead view of building" fill src="/overhead.jpg" />
      </swiper-slide>
      <swiper-slide>
        <Image alt="image of structure" fill src="/structure.jpg" />
      </swiper-slide>
    </swiper-container>
  )
}
