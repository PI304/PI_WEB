import { css } from 'styled-components';

export namespace SC {
  export const HideScrollBar = css`
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  `;

  export const BounceObject = css`
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
