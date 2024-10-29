import { MouseEventHandler } from 'react';

export default interface ArrowProps {
  className: string;
  style: object;
  onClick: MouseEventHandler<HTMLDivElement>;
}
