import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Paths } from '../../constants';
import { planetController } from '../../models';
import { svgEntireNavigator } from '../../styles';

export const Navigator = () => {
  const router = useRouter();
  const [controller, setController] = useState<planetController>();

  const onPrev = () => controller?.moveToPrev();
  const onNext = () => controller?.moveToNext();

  useEffect(() => {
    const path = router.pathname as unknown as (typeof Paths)[keyof Omit<typeof Paths, 'main'>];
    controller?.moveToPath(path);
  }, [controller, router.pathname]);

  useEffect(() => {
    const navigatorPath = document.getElementById('navigatorPath') as unknown as SVGPathElement;
    const targetBlue = document.getElementById('targetBlue');
    const targetRed = document.getElementById('targetRed');
    const targetPurple = document.getElementById('targetPurple');
    const targetYellow = document.getElementById('targetYellow');

    if (navigatorPath && targetBlue && targetRed && targetPurple && targetYellow) {
      const controller = new planetController(
        navigatorPath,
        targetBlue,
        targetRed,
        targetPurple,
        targetYellow,
        router,
      );
      setController(controller);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Container isShorten={false}>
      {svgEntireNavigator}
      <button onClick={onPrev}>onPrev</button>
      <button onClick={onNext}>onNext</button>
    </S.Container>
  );
};

namespace S {
  export const Container = styled.aside<IsShortenType>`
    flex-shrink: 0;
    display: flex;
    align-items: center;
    width: ${(props) => (!props.isShorten ? '40vw' : '24vw')};
    transition: 0.5s ease width;
    position: relative;
    transform: translateX(-30%);
    z-index: 100;

    > svg {
      overflow: visible;
      width: 100%;
      transform: scale(90%);
    }

    > button {
      transform: translate(50%);
      background-color: white;
      padding: 1rem;
      border-radius: 0.6rem;
      position: relative;
      left: 5rem;
      margin: 1rem;
    }
  `;
}
