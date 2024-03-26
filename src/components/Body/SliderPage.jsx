import "./SlidePage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SlideProducts } from "./SlideProducts";
import { useEffect, useState } from "react";

function SliderPage() {

  const [slidesView, setSlidesView] = useState(0);

  useEffect(()=>{
    const handleResize = ()=>{
      if(window.innerWidth >= 768){
        setSlidesView(3);
      }else{
        setSlidesView(1);
      }
    };

    window.addEventListener('resize',handleResize);
    handleResize();

    return()=> window.removeEventListener('resize',handleResize);
  },[])
  const slideImg = SlideProducts.map((img,index) => (
    <SwiperSlide key={index}>
      <img src={img.img} alt="slideImg" />
    </SwiperSlide>
  ));
  return (
    <div className="s-container">
      <Swiper
        
        slidesPerView={slidesView}
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
