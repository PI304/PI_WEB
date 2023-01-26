import styled from 'styled-components';
import { Colors, Fonts, svg404Ufo } from '../../../styles';

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
    margin: 0 auto;
    animation: bounce 0.5s linear 0s infinite alternate;
    backdrop-filter: blur(2px);

    @keyframes bounce {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-1rem);
      }
    }
  `;

  export const ErrorText = styled.div`
    color: ${Colors.white};
    margin: 0.5rem auto;
    text-align: center;
    ${Fonts.bold70}
  `;
}
