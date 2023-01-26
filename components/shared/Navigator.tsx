import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Paths } from '../../constants';
import { Planet } from '../../models';
import { svgEntireNavigator } from '../../styles/svgs';

export const Navigator = () => {
  const router = useRouter();
  const [planets, setPlanets] = useState<Planet[]>([]);

  const onMove = () => {
    planets?.forEach((planet) => {
      const planetPath = planet.getPathIfNextMainPhase();
      if (planetPath) router.push(planetPath);
      planet.moveToNextPhase();
    });
  };

  useEffect(() => {
    const navigatorPath = document.getElementById('navigatorPath') as unknown as SVGPathElement;
    const targetBlue = document.getElementById('targetBlue');
    const targetRed = document.getElementById('targetRed');
    const targetPurple = document.getElementById('targetPurple');
    const targetYellow = document.getElementById('targetYellow');

    if (navigatorPath && targetBlue && targetRed && targetPurple && targetYellow) {
      const bluePlanet = new Planet(navigatorPath, targetBlue, 1, Paths.team);
      const redPlanet = new Planet(navigatorPath, targetRed, 2, Paths.value);
      const purplePlanet = new Planet(navigatorPath, targetPurple, 3, Paths.work);
      const yellowPlanet = new Planet(navigatorPath, targetYellow, 4, Paths.team);
      setPlanets([bluePlanet, redPlanet, purplePlanet, yellowPlanet]);
    }
  }, []);

  return (
    <S.Container isShorten={false}>
      {svgEntireNavigator}
      <button onClick={onMove}>MOVE</button>
    </S.Container>
  );
};

namespace S {
  export const Container = styled.aside<IsShortenType>`
    display: flex;
    align-items: center;
    width: ${(props) => (!props.isShorten ? '40vw' : '24vw')};
    transition: 0.5s ease width;
    position: relative;
    transform: translateX(-30%);
    z-index: 1;

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
    }
  `;
}
