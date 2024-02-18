import React from 'react'
import sliderimg1 from "../../images/homeslider/1.webp";
import sliderimg2 from "../../images/homeslider/2.webp";
import sliderimg3 from "../../images/homeslider/3.webp";
import sliderimg4 from "../../images/homeslider/4.webp";
import sliderimg5 from "../../images/homeslider/5.webp";
import sliderimg6 from "../../images/homeslider/6.webp";
import sliderimg7 from "../../images/homeslider/7.webp";
import sliderimg8 from "../../images/homeslider/8.webp";
import sliderimg9 from "../../images/homeslider/9.webp";
import sliderimg10 from "../../images/homeslider/10.webp";
import sliderimg11 from "../../images/homeslider/11.webp";
import sliderimg12 from "../../images/homeslider/12.webp";
import sliderimg13 from "../../images/homeslider/13.webp";
import sliderimg14 from "../../images/homeslider/14.webp";
import sliderimg15 from "../../images/homeslider/15.webp";
import sliderimg16 from "../../images/homeslider/16.webp";
import sliderimg17 from "../../images/homeslider/17.webp";
import sliderimg18 from "../../images/homeslider/18.webp";
"use client";

import { Carousel } from "flowbite-react";
function Slide() {
  return (
    <Carousel>
      <img alt="..." src={sliderimg1} className="rounded-xl" />
      <img alt="..." src={sliderimg2} className="rounded-xl" />
      <img alt="..." src={sliderimg3} className="rounded-xl" />
      <img alt="..." src={sliderimg4} className="rounded-xl" />
      <img alt="..." src={sliderimg5} className="rounded-xl" />
      <img alt="..." src={sliderimg6} className="rounded-xl" />
      {/* <img alt="..." src={sliderimg7} className="rounded-xl" /> */}
      <img alt="..." src={sliderimg8} className="rounded-xl" />
      {/* <img alt="..." src={sliderimg9} className="rounded-xl" /> */}
      <img alt="..." src={sliderimg10} className="rounded-xl" />
      <img alt="..." src={sliderimg11} className="rounded-xl" />
      <img alt="..." src={sliderimg12} className="rounded-xl" />
      <img alt="..." src={sliderimg13} className="rounded-xl" />
      <img alt="..." src={sliderimg14} className="rounded-xl" />
      {/* <img alt="..." src={sliderimg15} className="rounded-xl" /> */}
      <img alt="..." src={sliderimg16} className="rounded-xl" />
      <img alt="..." src={sliderimg17} className="rounded-xl" />
      <img alt="..." src={sliderimg18} className="rounded-xl" />
    </Carousel>
  );
}

export default Slide