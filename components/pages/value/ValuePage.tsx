import styled from 'styled-components';
import { Colors, svgProgressUfo, SC } from '../../../styles';
import { TitleLabel } from '../../shared/TitleLabel';

export const ValuePage = () => {
  return (
    <S.Container>
      <S.ProgressBarContainer>
        <div></div>
        <S.UfoImg>{svgProgressUfo}</S.UfoImg>
        <div></div>
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
    ${SC.SpaceInUp}
    height: 8%;
    width: 95%;
    margin-right: 5rem;
    border-bottom: 0.3rem solid ${Colors.white};
    position: relative;

    > div:first-of-type {
      margin: 0 auto;
      width: 1rem;
      height: 1rem;
      border: 0.3px solid ${Colors.white};
      border-radius: 50%;
      background-color: ${Colors.white};
      position: absolute;
      top: 5.8rem;
    }

    > div:last-of-type {
      margin: 0 auto;
      width: 1rem;
      height: 1rem;
      border: 0.3px solid ${Colors.white};
      border-radius: 50%;
      background-color: ${Colors.white};
      position: absolute;
      right: 0;
      top: 5.8rem;
    }
  `;

  export const UfoImg = styled.div`
    ${SC.BounceAnimation}
    position: absolute;
    top: 1.5rem;
    left: -4rem;
  `;
}
