import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper';
import 'swiper/css';

const BannerLandingPageSlider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
      effect='coverflow'
      coverflowEffect={{
        rotate: 0,
        depth: 0,
        slideShadows: false,
        scale: 1.5,
      }}
      width={480}
      height={600}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img src='https://swiperjs.com/demos/images/nature-1.jpg' alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <img src='https://swiperjs.com/demos/images/nature-2.jpg' alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <img src='https://swiperjs.com/demos/images/nature-3.jpg' alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <img src='https://swiperjs.com/demos/images/nature-4.jpg' alt='' />
      </SwiperSlide>
      ...
    </Swiper>
  );
};

export default BannerLandingPageSlider;
