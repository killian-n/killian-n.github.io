import Slider from 'react-slick';
import { forwardRef } from 'react';
import SliderProps from '../types/SliderProps';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import ArrowProps from '../types/ArrowProps';
import { Settings } from 'react-slick';

const ProjectSlider = forwardRef<Slider, SliderProps>(function ProjectSlider(
  props,
  ref,
) {
  const settings: Settings = {
    className: 'Slider',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    dots: true,
    nextArrow: (
      <NextArrow {...(props as ArrowProps)} />
    ) as React.ReactElement<ArrowProps>,
    prevArrow: (
      <PrevArrow {...(props as ArrowProps)} />
    ) as React.ReactElement<ArrowProps>,
  };
  return (
    <Slider {...settings} ref={ref}>
      {props.children}
    </Slider>
  );
});

export default ProjectSlider;
