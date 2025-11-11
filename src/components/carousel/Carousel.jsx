import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import './carousel.css';

import { Navigation } from 'swiper/modules';
import { DATA } from '../../mock/carousel';
import { CARD } from '../../mock/carousel';
import { BRAND } from '../../mock/carousel';

function Carousel() {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <section className='section'>
            {DATA.map((item, index) => (
              <div key={index} className='banner-container'>
                <div className='for-text-container'>
                  <p className='paragraph'>{item.on}</p>
                  <h1 className='heading-one'>{item.title}</h1>
                  <p className='paragraph-two'>{item.foiz}</p>
                </div>
                <div className='right-container'>
                  <div className='on-img'>a</div>
                  <div className='img-container'>
                    <img src={item.url} alt="" className='img'/>
                  </div>
                  <div className='under-img'>b</div>
                </div>
              </div>
            ))}
          </section>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      <h1></h1>
      <div className='cards-wrapper'>
  {CARD.map((item, index) => (
    <div key={index} className='card'>
      <div>
        <img className='card-image' src={item.url} alt="" />
      </div>
      <div>
        <h3 className='heading-first'>{item.title}</h3>
      <p className='paragraph-first'>{item.text}</p>
      </div>
    </div>
  ))}
</div>



<div className='brand-container'>
  {BRAND.map((item, index) => (
    <div key={index} className='brand-card'>
  <img src={item.url} alt="" />
</div>
  ))}

</div>

    </div>
  );  
}

export default Carousel;