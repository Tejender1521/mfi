import React from 'react'
import sliderimg1 from "../../images/homeslider/1.webp";
import sliderimg3 from "../../images/homeslider/3.webp";
import sliderimg4 from "../../images/homeslider/4.webp";
"use client";

import { Carousel } from "flowbite-react";
function Slide() {
  return (
    
      <Carousel>
        <img alt="..." src={sliderimg1} />
        <img alt="..." src={sliderimg3} />
        <img alt="..." src={sliderimg4} />
      </Carousel>
    
  );
}

export default Slide