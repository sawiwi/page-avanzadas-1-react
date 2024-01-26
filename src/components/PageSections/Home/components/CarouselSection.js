import React from 'react';
import MainCarousel from '../../../Carousel/MainCarousel';
import { mainCarouselData } from '../../../../data';

const CarouselSection = () => (
  <div className="h-[400px] xl:h-[90vh]">
    <MainCarousel data={mainCarouselData} />
  </div>
);

export default CarouselSection;
