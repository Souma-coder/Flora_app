import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";
import { SliderProducts } from "../../data/products";

const Slider = () => {
  return (
    <div className="s_container">
      <Swiper
        modules={[Pagination, Navigation]}
        loopFillGroupWithBlank={true}
        navigation={true}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          0: {
            slidesPerView: 2,
          },
        }}
        className="swipe"
      >
        {SliderProducts.map((slide, i) => (
          <SwiperSlide className="swipe_slide">
            <div className="left_s">
              <div className="name">
                <span>{slide.name}</span>
                <span>{slide.detail}</span>
              </div>
              <span>Rs. {slide.price}</span>
              <div>Shop now</div>
              <img src={slide.img} alt="product" className="img_product" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
