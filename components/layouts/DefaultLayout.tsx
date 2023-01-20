import styled from 'styled-components';
import { ContactWidget, SpaceBackground } from '../shared';

export default function DefaultLayout({ children }: ChildrenType) {
  return (
    <S.Layout>
      <SpaceBackground />
      {children}
      <ContactWidget />
    </S.Layout>
  );
}

namespace S {
  export const Layout = styled.div`
    width: 100vw;
    height: 100vh;
  `;
}
