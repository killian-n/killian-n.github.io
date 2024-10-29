import Slider from 'react-slick';
import { forwardRef } from 'react';
import SliderProps from '../types/SliderProps';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import ArrowProps from '../types/ArrowProps';

const ProjectSlider = forwardRef<HTMLElement, SliderProps>(
  function ProjectSlider(props, ref) {
    const settings = {
      className: 'Slider',
      centerMode: true,
      infinite: true,
      centerPadding: '60px',
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      dots: true,
      NextArrow: (props: ArrowProps) => <NextArrow {...props} />,
      PreviousArrow: (props: ArrowProps) => <PrevArrow {...props} />,
    };
    return <Slider {...settings}>{props.children}</Slider>;
  },
);

export default ProjectSlider;
