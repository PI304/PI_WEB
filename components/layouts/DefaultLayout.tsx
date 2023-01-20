import styled from 'styled-components';
import { ContactWidget } from '../shared';
import SpaceBackground from '../shared/SpaceBackground';

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
