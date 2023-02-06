import styled from 'styled-components';
import { ColorType, TitleLabelProps } from '../../@types';
import { Fonts, Colors, svgExploreArrow12, SC } from '../../styles';

export const TitleLabel = ({ title, color }: TitleLabelProps) => {
  return (
    <S.ContentContainer>
      <S.Title>{title}</S.Title>
      <S.Explore color={color}>
        <S.ExploreText>Explore</S.ExploreText>
        <S.Arrow>{svgExploreArrow12}</S.Arrow>
      </S.Explore>
    </S.ContentContainer>
  );
};

namespace S {
  export const ContentContainer = styled.div`
    ${SC.SpaceInRightAnimation}
    color: ${Colors.white};
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: column;
    height: 90%;
    position: fixed;
    padding-right: 5rem;
    z-index: 1;
  `;

  export const Title = styled.div`
    ${Fonts.bold100}
    display: flex;
    justify-content: flex-end;
    width: 80%;
    padding-right: 2rem;
  `;

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
