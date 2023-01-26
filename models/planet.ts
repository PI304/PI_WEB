import { Paths } from '../constants/paths';
import { Phases } from '../constants/phases';

export class Planet {
  private DURATION = 0.5;
  private FPS = 60;
  private path: (typeof Paths)[keyof typeof Paths];
  private pathRef: SVGPathElement;
  private planetRef: HTMLElement;
  private currentPhase: keyof typeof Phases;
  private timer: number[] = [];
  private isMoving = false;

  constructor(
    pathRef: SVGPathElement,
    planetRef: HTMLElement,
    currentPhase: keyof typeof Phases,
    path: (typeof Paths)[keyof typeof Paths],
  ) {
    this.pathRef = pathRef;
    this.planetRef = planetRef;
    this.currentPhase = currentPhase;
    this.path = path;
    this.initialize();
  }

  initialize() {
    const { x, y } = this.pathRef.getPointAtLength(Phases[this.currentPhase].startPoint);
    this.planetRef.setAttribute(
      'transform',
      `translate(${x}, ${y}) scale(${Phases[this.currentPhase].scale})`,
    );
    this.planetRef.setAttribute('opacity', '1');
  }

  moveToNextPhase(frame = 1) {
    if (frame == 1)
      if (this.isMoving) return;
      else this.isMoving = true;

    if (frame > this.FPS * this.DURATION) {
      this.timer.map((timer) => cancelAnimationFrame(timer));
      this.timer = [];
      this.currentPhase = this.getNextPhase();
      this.isMoving = false;
      return;
    }

    if (this.pathRef) {
      const { x, y } = this.pathRef.getPointAtLength(
        Phases[this.currentPhase].startPoint +
          (Phases[this.currentPhase].willMove / this.DURATION / this.FPS) * frame,
      );

      const scaleOffset = Phases[this.getNextPhase()].scale - Phases[this.currentPhase].scale;
      const nextScale =
        Phases[this.currentPhase].scale + (scaleOffset / this.DURATION / this.FPS) * frame;

      this.planetRef.setAttribute('transform', `translate(${x}, ${y}) scale(${nextScale})`);

      const timerId = requestAnimationFrame(() => this.moveToNextPhase(frame + 1));
      this.timer.push(timerId);
    }
  }

  getNextPhase(): keyof typeof Phases {
    if (this.currentPhase !== Object.keys(Phases).length)
      return (this.currentPhase + 1) as keyof typeof Phases;
    else return 1;
  }

  getPathIfMainPhase() {
    if (this.currentPhase === 1) return this.path;
  }
}
