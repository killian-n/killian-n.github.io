import { MouseEventHandler } from 'react';
import { Settings as SliderSettings } from 'react-slick';

export default interface SliderProps extends SliderSettings {
  children: React.ReactNode;
  className: string;
  style: object;
  onClick: MouseEventHandler<HTMLDivElement>;
}
