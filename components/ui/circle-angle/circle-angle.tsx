import * as React from 'react';
import * as Styled from './circle-angle.styled';

const CircleAngle: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>();
  const [angle, setAngle] = React.useState<number>();
  const [isDown, setIsDown] = React.useState<boolean>(false);

  const onMouseMove = React.useCallback((e) => {
    // Container要素の中心座標からの角度を求める
    if (!ref.current || !isDown) {
      return;
    }
    e.preventDefault();
    // container の document からの位置
    const { top, left } = ref.current.getBoundingClientRect();
    const x = left + window.pageXOffset;
    const y = top + window.pageYOffset;
    // center
    const cx = 80;
    const cy = 80;
    // 中心位置からのマウス座標
    const mx = e.pageX - (x + cx);
    const my = e.pageY - (y + cy);
    // 角度計算（- 45 はマウスを円弧の中心位置にするため）
    const degree = Math.atan2(my, mx) * 180 / Math.PI - 45;
    setAngle(degree);
    console.log({ degree })
  }, [isDown]);

  return (
    <Styled.Wrapper ref={ref}>
      <Styled.Container
        style={{ transform: `rotate(${angle}deg)` }}
        onMouseMove={onMouseMove}
        onMouseDown={() => setIsDown(true)}
        onMouseUp={() => setIsDown(false)}
      >
        <svg width="80" height="80">
          <path d="M0,0 L80,0 A80,80 0 0,1 0,80z" fill="#03A9F4" />
        </svg>
      </Styled.Container>
      <div>Angle: {angle > 0 ? Math.floor(angle) : Math.floor(angle) + 360}</div>
    </Styled.Wrapper>
    
  );
}

export default CircleAngle;