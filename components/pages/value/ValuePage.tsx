import styled from 'styled-components';
import { Colors, Fonts, svgProgressUfo, svgProgressLine, SC } from '../../../styles';
import { Explore } from '../../shared/Explore';

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
        <Explore color={Colors.red500}></Explore>
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
    ${SC.BounceAnimation}
    position: absolute;
    bottom: 0;
    z-index: 1;
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
}
