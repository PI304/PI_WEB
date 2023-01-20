import styled from 'styled-components';
import { useState } from 'react';

export const Navigator = () => {
  const [isShorten, setIsShorten] = useState(false);
  const onClick = () => setIsShorten(!isShorten);

  return (
    <S.Container onClick={onClick} isShorten={isShorten}>
      Navigator <br />
      40vw~24vw
    </S.Container>
  );
};

namespace S {
  export const Container = styled.aside<IsShortenType>`
    font-weight: 700;
    font-size: 3rem;
    background-color: pink;
    opacity: 0.5;
    width: ${(props) => (!props.isShorten ? '40vw' : '24vw')};
    transition: 0.5s ease width;
    cursor: pointer;
  `;
}
