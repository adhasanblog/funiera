import { Swiper, SwiperSlide } from 'swiper/react';

const BannerLandingPageSlider = () => {
  return (
    <Swiper>
      <SwiperSlide>
        {({ isActive }) => (
          <div>Current slide is {isActive ? 'active' : 'not active'}</div>
        )}
      </SwiperSlide>
    </Swiper>
  );
};

export default BannerLandingPageSlider;
