import styled from 'styled-components';
import { Colors, svgProgressUfo, svgProgressLine, SC } from '../../../styles';
import { TitleLabel } from '../../shared/TitleLabel';

export const ValuePage = () => {
  return (
    <S.Container>
      <S.ProgressBarContainer>
        <S.ProgressBar>
          {svgProgressLine}
          <S.UfoImg>{svgProgressUfo}</S.UfoImg>
        </S.ProgressBar>
      </S.ProgressBarContainer>
      <TitleLabel title='VALUE' color={Colors.red500}></TitleLabel>
    </S.Container>
  );
};

namespace S {
  export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: flex-end;
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
}
