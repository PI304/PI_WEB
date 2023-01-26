import { useState, useEffect, useRef, MutableRefObject } from 'react';
import styled from 'styled-components';
import { useMobile } from '../../hooks';
import { Colors } from '../../styles';
import { svgSparkle } from '../../styles/svgs';
import { pickRandomInteger } from '../../utils/pickRandomInteger';

export const SpaceBackground = () => {
  const isMobile = useMobile();
  const [acceleration, setAcceleration] = useState(1);

  const onIncreaseAcceleration = () => setAcceleration(acceleration + 2);
  const onResetAcceleration = () => setAcceleration(1);
  const onRequestFullscreen = () => document.documentElement.requestFullscreen();

  return (
    <>
      <S.Container>
        {Array(isMobile ? 30 : 150)
          .fill(0)
          .map((v, i) => (
            <SparkleElement acceleration={acceleration} key={i} />
          ))}
      </S.Container>
      <S.TestButtons>
        <button>{acceleration}x</button>
        <button onClick={onIncreaseAcceleration}>빠르게</button>
        <button onClick={onResetAcceleration}>리셋</button>
        <button onClick={onRequestFullscreen}>전체화면</button>
      </S.TestButtons>
    </>
  );
};

const SparkleElement = ({ acceleration }: SparkleElementProps) => {
  const [initialRight, setInitialRight] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const [top, setTop] = useState(0);
  const [blinkDuration, setBlinkDuration] = useState(0);
  const [blinkDelay, setBlinkDelay] = useState(0);
  const [scale, setScale] = useState(0);
  const ref = useRef() as MutableRefObject<HTMLDivElement>;
  const timerRef = useRef<number[]>([]);

  const getRound = (num: number): number => +num.toFixed(3);

  const removeUnit = (str: string): number => +str.replace('px', '');

  const move = () => {
    const offset = getRound(speed * (1 / 60) * acceleration);
    const prevRight = removeUnit(ref.current.style.right);
    ref.current.style.right = `${prevRight + offset}px`;
  };

  const draw = () => {
    if (ref && ref.current) {
      const left = ref.current.offsetLeft;
      if (left <= -100) ref.current.style.right = '0px';
      move();
      const timerId = requestAnimationFrame(draw);
      timerRef.current.push(timerId);
    }
  };

  useEffect(() => {
    if (initialRight) {
      const removeTargets = [];
      if (timerRef.current.length) {
        removeTargets.push(...timerRef.current);
        timerRef.current = [];
      } else ref.current.style.right = initialRight + 'px';
      draw();
      /* Remove prev anims after draw next anims to prevent freeze */
      if (removeTargets.length) removeTargets.forEach((timerId) => cancelAnimationFrame(timerId));
    }
  });

  useEffect(() => {
    const viewportWidth = window.innerWidth;
    setInitialRight(pickRandomInteger(0, viewportWidth));
    setSpeed(pickRandomInteger(20, 100));
    setOpacity(pickRandomInteger(6, 10));
    setTop(pickRandomInteger(0, 100));
    setBlinkDuration(pickRandomInteger(5, 10));
    setBlinkDelay(pickRandomInteger(0, 5));
    setScale(pickRandomInteger(10, 100));
  }, []);

  return (
    <S.Sparkle
      ref={ref}
      opacity={opacity}
      top={top}
      blinkDuration={blinkDuration}
      blinkDelay={blinkDelay}
      scale={scale}>
      {svgSparkle}
    </S.Sparkle>
  );
};

namespace S {
  export const Container = styled.div`
    background-color: ${Colors.black900};
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  `;

  export const Sparkle = styled.div<SparkleProps>`
    position: absolute;
    right: -100px;
    opacity: 0;
    top: ${(props) => props.top && props.top + 'vh'};
    transform: ${(props) => props.scale && `scale(${props.scale}%)`};
    animation: blink ease infinite;
    animation-duration: ${(props) => props.blinkDuration && props.blinkDuration + 's'};
    animation-delay: ${(props) => props.blinkDelay && props.blinkDelay + 's'};

    @keyframes blink {
      50% {
        opacity: ${(props) => props.opacity && props.opacity};
      }
    }
  `;

  export const TestButtons = styled.div`
    position: fixed;
    bottom: 0;
    display: flex;
    gap: 1rem;
    padding: 1rem;

    > button {
      background-color: white;
      padding: 1rem;
      border-radius: 0.6rem;
      cursor: pointer;
    }
  `;
}
