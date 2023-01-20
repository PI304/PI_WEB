import styled from 'styled-components';
import { Colors } from '../../styles/colors';

export default function ContactWidget() {
  return <S.Container>Widget</S.Container>;
}

namespace S {
  export const Container = styled.div`
    background-color: blueviolet;
    color: ${Colors.white};
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    position: fixed;
    bottom: 3rem;
    right: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
}
