import "./SlidePage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SlideProducts } from "./SlideProducts";

function SliderPage() {
  const slideImg = SlideProducts.map((img) => (
    <SwiperSlide>
      <img src={img.img} alt="slideImg" />
    </SwiperSlide>
  ));
  return (
    <div className="s-container">
      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        modules={[Pagination, Navigation]}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        loopFillGroupWithBlank={true}
        className="mySwiper"
      >
        {slideImg}
      </Swiper>
    </div>
  );
}
export default SliderPage;
