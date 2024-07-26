'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import styles from './Carousel.module.css';

// Importa i CSS di slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adatta per schermi inferiori a 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        <div className={styles.slide}>
          <Image src="/images/news1.jpg" alt="News 1" layout="fill" objectFit="cover" />
        </div>
        <div className={styles.slide}>
          <Image src="/images/news2.jpg" alt="News 2" layout="fill" objectFit="cover" />
        </div>
        <div className={styles.slide}>
          <Image src="/images/news3.jpg" alt="News 3" layout="fill" objectFit="cover" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
