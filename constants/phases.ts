export const Phases = {
  1: {
    startPoint: 0,
    willMove: 600 - 0,
    scale: 1.4,
  },
  2: {
    startPoint: 600,
    willMove: 1100 - 600,
    scale: 0.7,
  },
  3: {
    startPoint: 1100,
    willMove: 1510 - 1100,
    scale: 0.3,
  },
  4: {
    startPoint: 1510,
    willMove: 2081.4 - 1510,
    scale: 0.35,
  },
} as const;
