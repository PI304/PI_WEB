import { Paths, Phases, Stuffs } from '../constants';
import { roundDown } from '../utils';

export class Planet {
  private DURATION = Stuffs.navigatorAnimationDuration;
  private FPS = 60;
  private routePath: (typeof Paths)[keyof typeof Paths];
  private pathRef: SVGPathElement;
  private planetRef: HTMLElement;
  private currentPhase: keyof typeof Phases;
  private timer: number[] = [];
  private isMoving = false;

  constructor(
    pathRef: SVGPathElement,
    planetRef: HTMLElement,
    currentPhase: keyof typeof Phases,
    routePath: (typeof Paths)[keyof typeof Paths],
  ) {
    this.pathRef = pathRef;
    this.planetRef = planetRef;
    this.currentPhase = currentPhase;
    this.routePath = routePath;
    this.initialize();
  }

  static convertToValidPhaseIndex(phase: number): keyof typeof Phases {
    const phaseLength = Object.keys(Phases).length;
    if (phase > phaseLength) return (phase - phaseLength) as keyof typeof Phases;
    if (phase <= 0) return (phase + phaseLength) as keyof typeof Phases;
    return phase as keyof typeof Phases;
  }

  initialize() {
    const { x, y } = this.pathRef.getPointAtLength(Phases[this.currentPhase].startPoint);
    this.planetRef.setAttribute(
      'transform',
      `translate(${x}, ${y}) scale(${Phases[this.currentPhase].scale})`,
    );
    this.planetRef.setAttribute('opacity', '1');
  }

  moveForwardToSpecificPhase(destination: keyof typeof Phases) {
    this.moveToSpecificPhase(destination, this.calcForwardLength.bind(this));
  }

  moveBackwardToSpecificPhase(destination: keyof typeof Phases) {
    this.moveToSpecificPhase(destination, this.calcBackwardLength.bind(this));
  }

  moveToSpecificPhase(
    destination: keyof typeof Phases,
    calcLengthLogic: typeof this.calcForwardLength | typeof this.calcBackwardLength,
    frame = 1,
  ) {
    if (!this.pathRef) return;

    if (frame == 1)
      if (this.isMoving) return;
      else this.isMoving = true;

    if (frame > this.FPS * this.DURATION) {
      this.timer.map((timer) => cancelAnimationFrame(timer));
      this.timer = [];
      this.currentPhase = destination;
      this.isMoving = false;
      return;
    }

    const totalLength = calcLengthLogic(destination, frame);
    const { x, y } = this.pathRef.getPointAtLength(this.convertToValidPathLength(totalLength));

    const scaleOffset = Phases[destination].scale - Phases[this.currentPhase].scale;
    const nextScale =
      Phases[this.currentPhase].scale + (scaleOffset / this.DURATION / this.FPS) * frame;

    this.planetRef.setAttribute('transform', `translate(${x}, ${y}) scale(${nextScale})`);

    const timerId = requestAnimationFrame(() =>
      this.moveToSpecificPhase(destination, calcLengthLogic, frame + 1),
    );
    this.timer.push(timerId);
  }

  getCurrentPhase() {
    return this.currentPhase;
  }

  getNextPhaseIndex(currentPhase = this.currentPhase) {
    return Planet.convertToValidPhaseIndex(currentPhase + 1);
  }

  getPrevPhaseIndex(currentPhase = this.currentPhase) {
    return Planet.convertToValidPhaseIndex(currentPhase - 1);
  }

  getPathIfNextMainPhase() {
    if (this.getNextPhaseIndex() === 1) return this.routePath;
  }

  getPathIfPrevMainPhase() {
    if (this.getPrevPhaseIndex() === 1) return this.routePath;
  }

  private calcDistance(startPhase: keyof typeof Phases, destination: keyof typeof Phases): number {
    let distance = 0;
    let phase = startPhase;
    do {
      distance += Phases[phase].willMove;
      phase = this.getNextPhaseIndex(phase);
    } while (phase !== destination);
    return roundDown(distance, 1);
  }

  private calcForwardLength(destination: keyof typeof Phases, frame: number): number {
    const startPoint = Phases[this.currentPhase].startPoint;
    const currentPhase = this.currentPhase;
    return (
      startPoint + (this.calcDistance(currentPhase, destination) / this.DURATION / this.FPS) * frame
    );
  }

  private calcBackwardLength(destination: keyof typeof Phases, frame: number): number {
    const startPoint = Phases[this.currentPhase].startPoint;
    const currentPhase = this.currentPhase;
    return (
      startPoint - (this.calcDistance(destination, currentPhase) / this.DURATION / this.FPS) * frame
    );
  }

  private convertToValidPathLength(distance: number) {
    const pathLength = this.pathRef.getTotalLength();
    if (distance < 0) return distance + pathLength;
    return distance >= pathLength ? distance - pathLength : distance;
  }
}
