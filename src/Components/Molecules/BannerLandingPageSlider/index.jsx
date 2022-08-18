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
    <div className='swiper-container'>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
        effect='coverflow'
        coverflowEffect={{
          depth: 225,
          rotate: 0,
          scale: 1,
          stretch: -60,
          slideShadows: false,
          modifier: 1,
        }}
        spaceBetween={0}
        slidesPerView={'auto'}
        loop={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        // onDestroy={() => console.log('Destroy')}
      >
        <SwiperSlide>
          <img src='./Images/SliderLandingPage/slider1.png' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='./Images/SliderLandingPage/slider2.png' alt='' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerLandingPageSlider;
