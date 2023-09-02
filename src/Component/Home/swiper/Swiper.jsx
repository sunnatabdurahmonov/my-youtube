import React, { useContext } from 'react';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { HeaderContext } from '../../Context/Context';
import '../swiper/swiper.scss'

export function Application() {
  const {data} = useContext(HeaderContext)
  return (
    <>
      <Swiper
        modules={[Pagination]}
        breakpoints= {{
          380: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          940: {
            slidesPerView: 5,
            spaceBetween: 10
          }
        }}
        className="mySwiper"
      >
        {data}
      </Swiper>
    </>
  );
}

export default  Application;