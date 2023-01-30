import styled from 'styled-components';
import { ColorType, ExploreProps } from '../../@types';
import { Colors, Fonts, svgExploreArrow12 } from '../../styles';

export const Explore = ({ color }: ExploreProps) => {
  return (
    <S.Explore color={color}>
      <S.ExploreText>Explore</S.ExploreText>
      <S.Arrow>{svgExploreArrow12}</S.Arrow>
    </S.Explore>
  );
};

namespace S {
  export const Explore = styled.div<ColorType>`
    margin-top: 3rem;
    width: 33rem;
    height: 6rem;
    background-color: ${(props) => props.color};
    color: ${Colors.white};
    display: flex;
  `;

  export const ExploreText = styled.div`
    ${Fonts.bold30}
    display: flex;
    align-items: center;
    padding: 3rem;
    width: 75%;
  `;

  export const Arrow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
  `;
}
