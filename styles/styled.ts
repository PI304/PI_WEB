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
}
