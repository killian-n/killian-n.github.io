import type ArrowProps from '../types/ArrowProps';

export default function NextArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        color: 'red',
      }}
      onClick={onClick}
    />
  );
}
