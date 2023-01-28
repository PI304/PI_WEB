import { NextRouter } from 'next/router';
import { Planet } from './planet';
import { Paths } from '../constants/paths';

export class planetController {
  private planets: Planet[];
  private routeMap: {
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
    const bluePlanet = new Planet(pathRef, blueRef, 1, Paths.team);
    const redPlanet = new Planet(pathRef, redRef, 2, Paths.value);
    const purplePlanet = new Planet(pathRef, purpleRef, 3, Paths.work);
    const yellowPlanet = new Planet(pathRef, yellowRef, 4, Paths.team);
    this.planets = [bluePlanet, redPlanet, purplePlanet, yellowPlanet];
    this.routeMap = {
      [Paths.team]: bluePlanet,
      [Paths.value]: redPlanet,
      [Paths.work]: purplePlanet,
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
    const mainPlanet = this.routeMap[routePath];
    const offset = +(1 - mainPlanet.getCurrentPhase());
    this.planets.forEach((planet) => {
      const destination = planet.getCurrentPhase() + offset;
      planet.moveForwardToSpecificPhase(planet.convertToValidPhaseIndex(destination));
    });
  }
}
