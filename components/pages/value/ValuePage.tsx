import styled from 'styled-components';
import { Colors, svgProgressUfo, SC } from '../../../styles';
import { TitleLabel } from '../../shared/TitleLabel';

export const ValuePage = () => {
  return (
    <S.Container>
      <S.ProgressBarContainer>
        <S.UfoImg>{svgProgressUfo}</S.UfoImg>
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
    ${SC.SpaceInUpAnimation}
    height: 8%;
    width: 95%;
    margin-right: 5rem;
    border-bottom: 0.3rem solid ${Colors.white};
    position: relative;

    &::before,
    &::after {
      content: '';
      margin: 0 auto;
      position: absolute;
      width: 1rem;
      height: 1rem;
      border: 0.03rem solid ${Colors.white};
      background-color: ${Colors.white};
      bottom: -0.6rem;
      transform: rotate(-45deg);
    }

    &::after {
      right: -1rem;
    }
  `;

  export const UfoImg = styled.div`
    display: flex;
    position: absolute;
    bottom: 0;
    left: -3rem;
    animation: bounce 0.5s linear 0s infinite alternate;
    @keyframes bounce {
      0% {
        transform: translateY(6.5rem);
      }
      100% {
        transform: translateY(5.5rem);
      }
    }
  `;
}
