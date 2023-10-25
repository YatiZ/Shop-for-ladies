import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ShoeSliderPage = () => {
    const settings ={
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow:1,
        slidesToScroll:1,
    }
  
  return (
    <div className='max-w-screen-lg mx-auto '>
        <Slider {...settings}>
            <div>
                <img src='https://images.unsplash.com/photo-1512921929709-6f1ff6aca605?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' alt='slideImg1'    />
            </div>
            <div>
                <img src='https://images.unsplash.com/photo-1446746423095-7ac8dde4962b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' alt='slideImg2'/>
            </div>
            <div>
                <img src='https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' alt='slideImg3'  />
            </div>
        </Slider>
        
    </div>
  )
}

export default ShoeSliderPage