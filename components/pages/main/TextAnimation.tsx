import React, { useState } from 'react';
import styled from 'styled-components';
import { useInterval } from '../../../hooks';
import { Colors, Fonts } from '../../../styles';

const wordArr = ['LEARN', 'WORK', 'GATHER', 'INNOVATE', 'CHALLENGE', 'FAIL', 'GROW'];
const actionArr = ['frontToTop', 'bottomToFront', 'backToBottom', 'topToBack'];

export const TextAnimation = () => {
  const [count, setCount] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);

  const setWordArr = () => {
    setCount(4);
  };

  const setTime = () => {
    setTimer(timer + 500);
  };

  useInterval(() => setWordArr(), count === 4 ? null : 1800);
  useInterval(() => setTime(), 500);

  return (
    <S.Container>
      {timer <= 3500 ? (
        <>
          <S.WeText>We</S.WeText>
          <S.RotateDiv>
            <S.WordBox action={actionArr[0]} length={wordArr[count].length}>
              {wordArr[count]}
            </S.WordBox>
            <S.WordBox action={actionArr[1]} length={wordArr[count + 1].length}>
              {wordArr[count + 1]}
            </S.WordBox>
            <S.WordBox action={actionArr[2]} length={wordArr[count + 2].length}>
              {wordArr[count + 2]}
            </S.WordBox>
            <S.WordBox action={actionArr[3]} length={wordArr[3].length}>
              {wordArr[3]}
            </S.WordBox>
          </S.RotateDiv>
        </>
      ) : (
        timer > 3500 && (
          <S.LineUpText>
            <S.RemoveText>This Is How We </S.RemoveText>
            <S.FixText>PLAY</S.FixText>
            <S.TypingText>IDEA</S.TypingText>
          </S.LineUpText>
        )
      )}
    </S.Container>
  );
};

namespace S {
  export const Container = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  export const WeText = styled.div`
    height: 7rem;
    margin: 0 1rem;
    padding: 0 0.5rem;
    ${Fonts.bold70};
    background: ${Colors.white};
    color: ${Colors.black900};
  `;

  export const RotateDiv = styled.div`
    height: 7rem;
    color: ${Colors.black900};
    width: 33rem;
    transform-style: preserve-3d;
    animation: rotate 3s ease 0.5s forwards 1;

    @keyframes rotate {
      15% {
        transform: translateZ(-3.5rem) rotateX(90deg);
      }
      30% {
        transform: translateZ(-3.5rem) rotateX(180deg);
      }
      45% {
        transform: translateZ(-3.5rem) rotateX(270deg);
      }
      60% {
        transform: translateZ(-3.5rem) rotateX(360deg);
      }
      75% {
        transform: translateZ(-3.5rem) rotateX(450deg);
      }
      100% {
        transform: translateZ(-3.5rem) rotateX(540deg);
        display: none;
      }
    }
  `;

  export const WordBox = styled.div<RotateTextProps>`
    ${Fonts.bold70};
    letter-spacing: ${(props) => (40 - 4.2 * props.length) / props.length - 1}rem;
    position: absolute;
    width: 33rem;
    background: ${Colors.white};
    transform: ${(props) => props.action === 'frontToTop' && 'rotateY(0deg) translateZ(3.5rem)'};
    transform: ${(props) =>
      props.action === 'bottomToFront' && 'rotateX(-90deg) translateZ(3.5rem)'};
    transform: ${(props) => props.action === 'backToBottom' && 'scaleY(-1) translateZ(-3.5rem)'};
    transform: ${(props) => props.action === 'topToBack' && 'rotateX(90deg) translateZ(3.5rem)'};
  `;

  export const LineUpText = styled.div`
    ${Fonts.bold70};
    color: ${Colors.white};
    display: inline-flex;
    white-space: nowrap;
    opacity: 0;
    animation: 1s anim-lineUp ease-out forwards;

    @keyframes anim-lineUp {
      0% {
        opacity: 0;
        transform: translateY(80%);
      }
      20% {
        opacity: 0;
      }
      50% {
        opacity: 1;
        transform: translateY(0%);
      }
      100% {
        opacity: 1;
        transform: translateY(0%);
      }
    }
  `;

  export const FixText = styled.span`
    :first-letter {
      color: #956eb5;
    }
  `;
  export const TypingText = styled.span`
    width: 0;
    animation: type 600ms ease-in-out 2200ms forwards;
    overflow: hidden;
    :first-letter {
      color: #956eb5;
    }

    @keyframes type {
      25% {
        width: 4.2rem;
      }
      50% {
        width: 8.4rem;
      }
      75% {
        width: 12.6rem;
      }
      100% {
        width: 16.8rem;
      }
    }
  `;

  export const RemoveText = styled.span`
    width: 63rem;
    animation: remove 500ms ease-in-out 1500ms forwards;
    overflow: hidden;

    @keyframes remove {
      6.6% {
        width: 63rem;
      }
      13.2% {
        width: 58.8rem;
      }
      19.8% {
        width: 54.6rem;
      }
      26.4% {
        width: 50.4rem;
      }
      33% {
        width: 46.2rem;
      }
      39.6% {
        width: 42rem;
      }
      46.2% {
        width: 37.8rem;
      }
      52.8% {
        width: 33.6rem;
      }
      59.4% {
        width: 29.4rem;
      }
      66% {
        width: 25.2rem;
      }
      72.6% {
        width: 21rem;
      }
      79.2% {
        width: 16.8rem;
      }
      85.8% {
        width: 12.6rem;
      }
      92.4% {
        width: 8.4rem;
      }
      99% {
        width: 4.2rem;
      }
      100% {
        width: 0;
      }
    }
  `;
}
