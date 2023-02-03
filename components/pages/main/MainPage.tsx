import styled from 'styled-components';
import { PlanetAnimation } from './PlanetAnimation';
import { TextAnimation } from './TextAnimation';

export const MainPage = () => {
  return (
    <S.Container>
      <PlanetAnimation />
      <TextAnimation />
    </S.Container>
  );
};

namespace S {
  export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > svg {
      overflow: visible;
    }
  `;
}
