import styled from 'styled-components';
import { Colors, Fonts, svg404Ufo, SC } from '../../../styles';

export const NotFoundPage = () => {
  return (
    <S.Container>
      <S.ErrorImg>{svg404Ufo}</S.ErrorImg>
      <S.ErrorText>404</S.ErrorText>
      <S.ErrorText>ERROR</S.ErrorText>
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
  `;

  export const ErrorImg = styled.div`
    ${SC.BounceAnimation}
    margin: 0 auto;
    backdrop-filter: blur(2px);
  `;

  export const ErrorText = styled.div`
    color: ${Colors.white};
    margin: 0.5rem auto;
    text-align: center;
    ${Fonts.bold70}
  `;
}
