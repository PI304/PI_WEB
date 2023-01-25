import { useState, useEffect, useRef, MutableRefObject } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styles';

export const SpaceBackground = () => {
  const [speed, setSpeed] = useState(100);

  const onAddDep = () => setSpeed(speed + 100);
  const onSubDep = () => setSpeed(Math.max(speed - 100, 0));

  return (
    <S.Container>
      <SparkleElement speed={speed} />
      <button onClick={onSubDep}>DEP -</button>
      <button onClick={onAddDep}>DEP +</button>
      <br />
      <button>{speed}</button>
    </S.Container>
  );
};

const SparkleElement = ({ speed }: { speed: number }) => {
  const ref = useRef() as MutableRefObject<HTMLDivElement>;
  const timerRef = useRef<number[]>([]);

  const getRound = (num: number): number => +num.toFixed(3);
  const removeUnit = (str: string): number => +str.replace('px', '');

  const move = () => {
    const offset = getRound(speed * (1 / 60));
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
    if (timerRef.current.length)
      timerRef.current.forEach((timerId) => cancelAnimationFrame(timerId));
    draw();
  });

  return <S.Sparkle ref={ref} dep={speed}></S.Sparkle>;
};

namespace S {
  export const Container = styled.div`
    background-color: ${Colors.black900};
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    /* z-index: -1; */

    > button {
      background-color: white;
    }
  `;

  export const Sparkle = styled.div<{ dep: number }>`
    background-color: white;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    position: absolute;
    right: 0px;
  `;
}
