'use client';

import React, { useEffect } from "react";
import { register } from "swiper/element/bundle";
import Image from "next/image";

export default function HomeCarousel() {
  useEffect(() => {
    register(); // Register Swiper web components
  }, []);

  return (
    <div className="relative w-full h-full">
      <swiper-container
        class="mySwiper"
        loop="true"
        autoplay-delay="7000"
        autoplay-disable-on-interaction="false"
        style={{ width: "100%", height: "100%" }}
      >
        <swiper-slide>
          <Image
            alt="electrical box"
            src="/box.jpg"
            fill
            className="object-cover"
          />
        </swiper-slide>
        <swiper-slide>
          <Image
            alt="locked electrical box"
            src="/locked.jpg"
            fill
            className="object-cover"
          />
        </swiper-slide>
        <swiper-slide>
          <Image
            alt="AC electrical unit"
            src="/AC.jpg"
            fill
            className="object-cover"
          />
        </swiper-slide>
        <swiper-slide>
          <Image
            alt="construction crane"
            src="/crane.jpg"
            fill
            className="object-cover"
          />
        </swiper-slide>
        <swiper-slide>
          <Image
            alt="electrical cables"
            src="/cables.jpg"
            fill
            className="object-cover"
          />
        </swiper-slide>
        <swiper-slide>
          <Image
            alt="overhead view of building"
            src="/overhead.jpg"
            fill
            className="object-cover"
          />
        </swiper-slide>
        <swiper-slide>
          <Image
            alt="image of structure"
            src="/structure.jpg"
            fill
            className="object-cover"
          />
        </swiper-slide>
      </swiper-container>
    </div>
  );
}
