import { MouseEventHandler } from 'react';

export default interface SliderProps {
  children: React.ReactNode;
  className: string;
  style: object;
  onClick: MouseEventHandler<HTMLDivElement>;
}
