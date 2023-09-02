import React, { useContext } from 'react';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { HeaderContext } from '../../Context/Context';

export function Application2() {
  const {data2} = useContext(HeaderContext)
  return (
    <>
      <Swiper
        modules={[Pagination]}
        breakpoints= {{
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          940: {
            slidesPerView: 3,
            spaceBetween: 20
          }
        }}
        className="mySwiper"
      >
        {data2.slice(20,70)}
      </Swiper>
    </>
  );
}

export default  Application2;