import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { svgFloatingWidget, svgMail } from '../../styles';

export const ContactWidget = () => {
  const [widgetOpen, setWidgetOpen] = useState<boolean>(false);
  const [mountComplete, setMountComplete] = useState<boolean>(false);
  // 모달창 노출
  const onShowMailContent = () => {
    if (widgetOpen) setMountComplete(true);
    setWidgetOpen(!widgetOpen);
  };

  const flickeringAnimation = (element: HTMLElement, idx: number) => {
    const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
    animate.setAttribute('attributeName', `opacity`);
    animate.setAttribute('attributeType', 'CSS');
    animate.setAttribute('from', '0.1');
    animate.setAttribute('to', '1');
    animate.setAttribute('dur', '3s');
    animate.setAttribute('begin', `${idx}s`);
    animate.setAttribute('repeatCount', 'indefinite');

    element.appendChild(animate);
  };

  useEffect(() => {
    const tail1 = document.getElementById('tail1');
    const tail2 = document.getElementById('tail2');
    const tail3 = document.getElementById('tail3');

    if (tail1 && tail2 && tail3) {
      const tailArr = [tail1, tail2, tail3];
      tailArr.forEach((tail, idx: number) => flickeringAnimation(tail, idx));
    }
  }, []);

  return (
    <>
      <S.Container>
        <S.FloatingWidget
          onClick={onShowMailContent}
          isOpen={widgetOpen}
          isMountComplete={mountComplete}>
          {svgFloatingWidget}
        </S.FloatingWidget>
        {widgetOpen && (
          <S.WidgetContent>
            <a href='mailto:playidealab@gmail.com'>{svgMail}</a>
          </S.WidgetContent>
        )}
      </S.Container>
    </>
  );
};

namespace S {
  export const Container = styled.div`
    position: fixed;
    bottom: 3rem;
    right: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  export const FloatingWidget = styled.div<FloatingWidgetProps>`
    animation: ${(props) =>
      props.isOpen ? 'moveLeft 1s forwards' : props.isMountComplete && 'moveRight 1s forwards'};
    @keyframes moveLeft {
      0% {
        transform: translateX(0rem);
      }
      100% {
        transform: translateX(-10rem);
      }
    }

    @keyframes moveRight {
      0% {
        transform: translateX(-10rem);
      }
      100% {
        transform: translateX(0rem);
      }
    }
  `;

  export const WidgetContent = styled.div`
    margin: 0 auto;
    position: fixed;
    visibility: visible;
    transition: linear 1000ms;
    animation: bounce 0.5s linear 0s infinite alternate, visibleMail 1.5s;
    @keyframes bounce {
      0% {
        transform: translateY(0.5rem);
      }
      100% {
        transform: translateY(-0.5rem);
      }
    }

    @keyframes visibleMail {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `;
}
