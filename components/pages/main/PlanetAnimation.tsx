import { useEffect } from 'react';
import { svgEntireNavigator } from '../../../styles';

export const PlanetAnimation = () => {
  const SPEED = 5;

  useEffect(() => {
    const targetBlue = document.getElementById('targetBlue');
    const targetRed = document.getElementById('targetRed');
    const targetPurple = document.getElementById('targetPurple');
    const targetYellow = document.getElementById('targetYellow');

    const createSpinningAnimation = (planet: HTMLElement, idx: number) => {
      const dur = 100 / SPEED;
      const beginSec = (dur / 4) * idx;
      if (!planet.hasChildNodes()) {
        const animateMotion = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'animateMotion',
        );
        animateMotion.setAttribute('dur', `${dur}`);
        animateMotion.setAttribute('repeatCount', 'indefinite');
        animateMotion.setAttribute('begin', `-${beginSec}s`);

        const mpath = document.createElementNS('http://www.w3.org/2000/svg', 'mpath');
        mpath.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#navigatorPath');
        animateMotion.appendChild(mpath);

        planet.setAttribute('opacity', '1');
        planet.appendChild(animateMotion);
      }
    };

    if (targetBlue && targetRed && targetPurple && targetYellow) {
      const planetArr = [targetBlue, targetRed, targetPurple, targetYellow];
      planetArr.forEach((planet, idx: number) => {
        planet.setAttribute('transform', `scale(0.5)`);
        createSpinningAnimation(planet, idx);
      });
    }
  }, []);

  return <>{svgEntireNavigator}</>;
};
