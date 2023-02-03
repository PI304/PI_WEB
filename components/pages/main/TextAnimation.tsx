import React, { useState } from 'react';
import styled from 'styled-components';
import { useInterval } from '../../../hooks';
import { Colors, Fonts } from '../../../styles';

export const TextAnimation = () => {
  const [count, setCount] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);
  const wordArr = ['LEARN', 'WORK', 'GATHER', 'INNOVATE', 'CHALLENGE', 'FAIL', 'GROW'];

  const setWordArr = () => {
    setCount(4);
    setTimer(timer + 1);
    console.log(count);
  };

  const setTime = () => {
    setTimer(timer + 1);
  };

  useInterval(() => setWordArr(), count === 4 ? null : 2500);
  useInterval(() => setTime(), 1000);

  return (
    <S.Container>
      {/*<S.AndText></S.AndText>*/}
      <S.WeText></S.WeText>
      {timer <= 5 ? (
        <S.TextDiv>
          <S.RotateBox action={'frontToTop'} length={wordArr[count].length}>
            {wordArr[count]}
          </S.RotateBox>
          <S.RotateBox action={'bottomToFront'} length={wordArr[count + 1].length}>
            {wordArr[count + 1]}
          </S.RotateBox>
          <S.RotateBox action={'backToBottom'} length={wordArr[count + 2].length}>
            {wordArr[count + 2]}
          </S.RotateBox>
          <S.RotateBox action={'topToBack'} length={wordArr[3].length}>
            {wordArr[3]}
          </S.RotateBox>
        </S.TextDiv>
      ) : (
        timer >= 5 && (
          <S.TextContainer>
            <S.ThisText>This is How We PLAY..</S.ThisText>
            <S.TypingText>IDEA</S.TypingText>

            {/*<S.PlayText>PLAY</S.PlayText>*/}
          </S.TextContainer>
        )
      )}
    </S.Container>
  );
};

namespace S {
  export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    //flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  export const AndText = styled.div`
    ${Fonts.bold70};
    background: ${Colors.white};
    color: ${Colors.black900};
    //opacity: 0;
    display: flex;
  `;
  export const WeText = styled.div`
    height: 7rem;
    margin: 0 1rem;
    padding: 0 0.5rem;
    ${Fonts.bold70};
    background: ${Colors.white};
    color: ${Colors.black900};
  `;

  export const TextDiv = styled.div`
    //float: left;
    height: 7rem;
    color: ${Colors.black900};
    width: 33rem;
    //position: absolute;
    transform-style: preserve-3d;
    animation: rotate 4s ease 1s forwards 1;

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

  export const RotateBox = styled.div<RotateTextProps>`
    ${Fonts.bold70};
    letter-spacing: ${(props) => (40 - 4.2 * props.length) / props.length - 1}rem;
    position: absolute;
    height: 7rem;
    width: 33rem;
    text-align: center;
    background: ${Colors.white};
    transform: ${(props) => props.action === 'frontToTop' && 'rotateY(0deg) translateZ(3.5rem)'};
    transform: ${(props) =>
      props.action === 'bottomToFront' && 'rotateX(-90deg) translateZ(3.5rem)'};
    transform: ${(props) => props.action === 'backToBottom' && 'scaleY(-1) translateZ(-3.5rem)'};
    transform: ${(props) => props.action === 'topToBack' && 'rotateX(90deg) translateZ(3.5rem)'};
  `;

  export const TextContainer = styled.div`
    //width: 40%;
    overflow: hidden;
    white-space: nowrap;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  `;

  export const ThisText = styled.div`
    ${Fonts.bold70};
    color: ${Colors.black900};
    background: ${Colors.white};
    //display: inline-block;
    position: absolute;
    //text-align: center;
    animation: leftRight 2s forwards 1 ease-in-out;

    @keyframes leftRight {
      0%,
      20% {
        transform: translateX(0%);
        right: 0;
      }
      80%,
      100% {
        //width: 40%;
        transform: translateX(25%);
        right: 100%;
        //width: 20%;
    }
  `;

  export const TypingText = styled.span`
    ${Fonts.bold70};
    color: ${Colors.black900};
    background: ${Colors.white};
    animation: type 1620ms;
    animation-fill-mode: forwards;
    animation-delay: 1s;

    :after {
      animation: cursor 320ms 8.625 ease-in-out;
    }

    @keyframes cursor {
      0%,
      100% {
        border-color: #f7f3ff;
      }
      50% {
        border-color: #241b5b;
      }
      100% {
        width: 0;
      }
    }

    @keyframes type {
      11.1111111111% {
        width: 0.49em;
      }
      22.2222222222% {
        width: 0.98em;
      }
      33.3333333333% {
        width: 1.47em;
      }
      44.4444444444% {
        width: 1.96em;
      }
      55.5555555556% {
        width: 2.45em;
      }
      66.6666666667% {
        width: 2.94em;
      }
      77.7777777778% {
        width: 3.43em;
      }
      88.8888888889% {
        width: 3.92em;
      }
      100% {
        width: 3.92em;
        padding-right: 0;
      }
    }
  `;

  // export const IdeaText = styled.div`
  //   ${Fonts.bold70};
  //   color: darkred;
  //   animation: moveLeft 1s linear;
  //   @keyframes moveLeft {
  //     0% {
  //       transform: translateX(500px);
  //     }
  //     100% {
  //       transform: translateX(-200px);
  //     }
  //   }
  // `;
}
