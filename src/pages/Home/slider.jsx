import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function Slider({slides}){
    return(
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={5}

      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
        >
            {slides.map((slide) => (
                <SwiperSlide className='text-center py-5' key={slide.image}>
                    <img src={slide.image} alt={slide.title}/>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
export default Slider;