import { NextRouter } from 'next/router';
import { Planet } from './planet';
import { Paths } from '../constants/paths';

export class planetController {
  private planets: Planet[];
  private pathToPlanetMap: {
    [keys in (typeof Paths)[keyof Omit<typeof Paths, 'main'>]]: Planet;
  };
  private router: NextRouter;

  constructor(
    pathRef: SVGPathElement,
    blueRef: HTMLElement,
    redRef: HTMLElement,
    purpleRef: HTMLElement,
    yellowRef: HTMLElement,
    router: NextRouter,
  ) {
    this.router = router;
    const redPlanet = new Planet(pathRef, redRef, 3, Paths.value);
    const purplePlanet = new Planet(pathRef, purpleRef, 4, Paths.work);
    const yellowPlanet = new Planet(pathRef, yellowRef, 1, Paths.team);
    const bluePlanet = new Planet(pathRef, blueRef, 2, Paths.edu);
    this.planets = [bluePlanet, redPlanet, purplePlanet, yellowPlanet];
    this.pathToPlanetMap = {
      [Paths.value]: redPlanet,
      [Paths.work]: purplePlanet,
      [Paths.team]: yellowPlanet,
      [Paths.edu]: bluePlanet,
    };
  }

  moveToNext() {
    this.planets.forEach((planet) => {
      planet.moveForwardToSpecificPhase(planet.getNextPhaseIndex());
      const path = planet.getPathIfNextMainPhase();
      if (path) this.router.push(path);
    });
  }

  moveToPrev() {
    this.planets.forEach((planet) => {
      planet.moveBackwardToSpecificPhase(planet.getPrevPhaseIndex());
      const path = planet.getPathIfPrevMainPhase();
      if (path) this.router.push(path);
    });
  }

  moveToPath(routePath: (typeof Paths)[keyof Omit<typeof Paths, 'main'>]) {
    const mainPlanet = this.pathToPlanetMap[routePath];
    const offset = +(1 - mainPlanet.getCurrentPhase());
    this.planets.forEach((planet) => {
      const destination = planet.getCurrentPhase() + offset;
      planet.moveForwardToSpecificPhase(Planet.convertToValidPhaseIndex(destination));
    });
  }
}
