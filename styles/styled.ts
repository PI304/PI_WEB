import { css } from 'styled-components';

export namespace SC {
  export const HideScrollBar = css`
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  `;

  export const BounceAnimation = css`
    animation: bounce 0.5s linear 0s infinite alternate;
    @keyframes bounce {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-1rem);
      }
    }
  `;

  export const SpaceInRightAnimation = css`
    animation: spaceInRight 1s;
    @keyframes spaceInRight {
      0% {
        opacity: 0;
        transform-origin: 100% 50%;
        transform: scale(0.2) translate(200%, 0%);
      }

      100% {
        opacity: 1;
        transform-origin: 100% 50%;
        transform: scale(1) translate(0%, 0%);
      }
    }
  `;

  export const SpaceInUpAnimation = css`
    animation: spaceInUp 1s;
    @keyframes spaceInUp {
      0% {
        opacity: 0;
        transform-origin: 50% 0%;
        transform: scale(0.2) translate(0%, -200%);
      }

      100% {
        opacity: 1;
        transform-origin: 50% 0%;
        transform: scale(1) translate(0%, 0%);
      }
    }
  `;
}
