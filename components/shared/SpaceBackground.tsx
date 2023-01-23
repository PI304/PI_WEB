import styled from 'styled-components';

export const SpaceBackground = () => {
  return <S.Container>SpaceBackground가 아래에 있음</S.Container>;
};

namespace S {
  export const Container = styled.div`
    font-weight: 700;
    font-size: 10rem;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: navy;
    z-index: -1;
  `;
}
