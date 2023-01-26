import styled from 'styled-components';
import { SpaceBackground } from '../shared';

export const WithoutWidgetLayout = ({ children }: ChildrenType) => {
  return (
    <S.Layout>
      {children}
      <SpaceBackground />
    </S.Layout>
  );
};

namespace S {
  export const Layout = styled.div`
    width: 100vw;
    height: 100vh;
  `;
}
