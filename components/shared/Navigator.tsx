import styled from 'styled-components';
import { useState } from 'react';

export default function Navigator() {
  const [isShorten, setIsShorten] = useState(false);
  const onClick = () => setIsShorten(!isShorten);

  return (
    <S.Container onClick={onClick} isShorten={isShorten}>
      Navigator
    </S.Container>
  );
}

namespace S {
  export const Container = styled.aside<IsShortenType>`
    background-color: pink;
    width: ${(props) => (!props.isShorten ? '40vw' : '24vw')};
    transition: 0.5s ease width;
  `;
}
