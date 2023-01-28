import { useRouter } from 'next/router';
import React, { useEffect, useState, MutableRefObject, useRef } from 'react';
import styled from 'styled-components';
import { Paths, Stuffs } from '../../constants';
import { planetController } from '../../models';
import { SC, svgEntireNavigator } from '../../styles';

export const Navigator = () => {
  const router = useRouter();
  const scrollWindowRef = useRef() as MutableRefObject<HTMLDivElement>;
  const [controller, setController] = useState<planetController>();
  const [foldStandard, setFoldStandard] = useState(0);
  const [moveDownStandard, setMoveDownStandard] = useState(0);
  const [defaultScrollXPosition, setDefaultScrollXPosition] = useState(0);
  const [defaultScrollYPosition, setDefaultScrollYPosition] = useState(0);
  const [isShorten, setIsShorten] = useState(false);

  const onPrev = () => controller?.moveToPrev();
  const onNext = () => controller?.moveToNext();

  const onScroll = () => {
    if (!(moveDownStandard && foldStandard)) return;
    onScrollX();
    onScrollY();
  };

  const onScrollX = () => {
    const scrollLeft = Math.ceil(scrollWindowRef.current.scrollLeft);
    if (scrollLeft >= foldStandard) {
      disableScrollAndRestoreAfterDuration();
      setIsShorten(true);
    }
    if (scrollLeft === 0) {
      disableScrollAndRestoreAfterDuration();
      setIsShorten(false);
    }
  };

  const onScrollY = () => {
    const scrollTop = Math.ceil(scrollWindowRef.current.scrollTop);
    if (scrollTop >= moveDownStandard) {
      disableScrollAndRestoreAfterDuration();
      onNext();
    }
    if (scrollTop === 0) {
      disableScrollAndRestoreAfterDuration();
      onPrev();
    }
  };

  const disableScrollAndRestoreAfterDuration = () => {
    scrollWindowRef.current.style.visibility = 'hidden';
    setTimeout(() => {
      scrollWindowRef.current.style.visibility = 'visible';
      scrollWindowRef.current.scrollTo(defaultScrollXPosition, defaultScrollYPosition);
    }, Stuffs.navigatorAnimationDuration * 1000);
  };

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

    const scrollWidth = scrollWindowRef.current.scrollWidth;
    const clientWidth = scrollWindowRef.current.clientWidth;
    const scrollHeight = scrollWindowRef.current.scrollHeight;
    const clientHeight = scrollWindowRef.current.clientHeight;

    const foldStandard = scrollWidth - clientWidth;
    setFoldStandard(foldStandard);

    const defaultScrollXPosition = (scrollWidth - clientWidth) / 2;
    scrollWindowRef.current.scrollLeft = defaultScrollXPosition;
    setDefaultScrollXPosition(defaultScrollXPosition);

    const moveDownStandard = scrollHeight - clientHeight;
    setMoveDownStandard(moveDownStandard);

    const defaultScrollYPosition = (scrollHeight - clientHeight) / 2;
    scrollWindowRef.current.scrollTop = defaultScrollYPosition;
    setDefaultScrollYPosition(defaultScrollYPosition);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Container isShorten={isShorten}>
      {svgEntireNavigator}
      <S.ScrollWindow ref={scrollWindowRef} onScroll={onScroll}>
        <S.Scroll />
      </S.ScrollWindow>
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
    }
  `;

  export const ScrollWindow = styled.section`
    ${SC.HideScrollBar}
    width: 100%;
    height: 100%;
    position: fixed;
    transform: translateX(30%);
    overflow: scroll;
  `;

  export const Scroll = styled.div`
    width: 120%;
    height: 120%;
  `;
}
