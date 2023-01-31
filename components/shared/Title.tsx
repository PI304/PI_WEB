import styled from 'styled-components';
import { Fonts } from '../../styles';

export const Title = ({ title }: TitleProps) => {
  return <S.Title>{title}</S.Title>;
};

namespace S {
  export const Title = styled.div`
    ${Fonts.bold100}
    display: flex;
    justify-content: flex-end;
    width: 80%;
    padding-right: 2rem;
  `;
}
