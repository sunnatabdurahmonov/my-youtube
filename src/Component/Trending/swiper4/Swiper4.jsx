import React, { useContext} from 'react';
import { Swiper} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel} from 'swiper/modules';
import { HeaderContext } from '../../Context/Context';

export function Swiper4() {
  const {data3} = useContext(HeaderContext)
  return (
    <>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel]}
        className="mySwiper"
      >
        {data3.slice(0,50)}
      
      </Swiper>
    </>
  );
}
export default Swiper4