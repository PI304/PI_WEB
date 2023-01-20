import { css } from 'styled-components';

export namespace SC {
  export const HideScrollBar = css`
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  `;
}
