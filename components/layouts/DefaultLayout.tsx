import styled from 'styled-components';
import { ContactWidget, SpaceBackground } from '../shared';

export const DefaultLayout = ({ children }: ChildrenType) => {
  return (
    <S.Layout>
      {children}
      <ContactWidget />
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
