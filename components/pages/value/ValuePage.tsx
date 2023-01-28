import styled from 'styled-components';
import { Colors, Fonts, svgProgressUfo, svgExploreArrow12, svgProgressLine } from '../../../styles';

export const ValuePage = () => {
  return (
    <S.Container>
      <S.ProgressBarContainer>
        <S.ProgressBar>
          {svgProgressLine}
          <S.UfoImg>{svgProgressUfo}</S.UfoImg>
        </S.ProgressBar>
      </S.ProgressBarContainer>
      <S.ContentContainer>
        <S.Title>VALUE</S.Title>
        <S.Explore>
          <S.ExploreText>Explore</S.ExploreText>
          <S.Arrow>{svgExploreArrow12}</S.Arrow>
        </S.Explore>
      </S.ContentContainer>
    </S.Container>
  );
};

namespace S {
  export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
  `;

  // ProgressBar Style
  export const ProgressBarContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 10%;
  `;

  export const ProgressBar = styled.div`
    position: relative;
    top: 5rem;
    width: 90%;
    z-index: 0;
  `;

  export const UfoImg = styled.div`
    position: absolute;
    bottom: 0;
    z-index: 1;
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

  // Content Style
  export const ContentContainer = styled.div`
    color: ${Colors.white};
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: column;
    padding-right: 5rem;
    height: 100%;
    padding-bottom: 5rem;
    z-index: 1;
  `;

  export const Title = styled.div`
    ${Fonts.bold100}
    display: flex;
    justify-content: flex-end;
    width: 80%;
    padding-right: 2rem;
  `;

  export const Explore = styled.div`
    margin-top: 3rem;
    width: 33rem;
    height: 6rem;
    background-color: ${Colors.red500};
    color: ${Colors.white};
    display: flex;
  `;

  export const ExploreText = styled.div`
    ${Fonts.bold30}
    display: flex;
    align-items: center;
    padding: 3rem;
    width: 75%;
  `;

  export const Arrow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
  `;
}
