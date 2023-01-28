import { useRouter } from 'next/router';
import React, { useEffect, useState, MutableRefObject, useRef } from 'react';
import styled from 'styled-components';
import { Paths } from '../../constants';
import { planetController } from '../../models';
import { SC, svgEntireNavigator } from '../../styles';

export const Navigator = () => {
  const router = useRouter();
  const scrollWindowRef = useRef() as MutableRefObject<HTMLDivElement>;
  const [controller, setController] = useState<planetController>();
  const [moveDownStandard, setMoveDownStandard] = useState(0);
  const [defaultScrollPosition, setDefaultScrollPosition] = useState(0);

  const onPrev = () => controller?.moveToPrev();
  const onNext = () => controller?.moveToNext();

  const onScroll = () => {
    const scrollTop = Math.round(scrollWindowRef.current.scrollTop);
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
      scrollWindowRef.current.scrollTo(0, defaultScrollPosition);
    }, 400);
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

    const moveDownStandard =
      scrollWindowRef.current.scrollHeight - scrollWindowRef.current.clientHeight;
    setMoveDownStandard(moveDownStandard);

    const defaultScrollPosition =
      (scrollWindowRef.current.scrollHeight - scrollWindowRef.current.clientHeight) / 2;
    scrollWindowRef.current.scrollTop = defaultScrollPosition;
    setDefaultScrollPosition(defaultScrollPosition);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Container isShorten={false}>
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
    width: 130%;
    height: 100%;
    position: fixed;
    overflow: scroll;
  `;

  export const Scroll = styled.div`
    width: 100%;
    height: 120%;
  `;
}
