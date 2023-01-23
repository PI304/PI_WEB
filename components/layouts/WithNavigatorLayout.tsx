import styled from 'styled-components';
import { Navigator } from '../shared';
import { DefaultLayout } from '.';

export const WithNavigatorLayout = ({ children }: ChildrenType) => {
  return (
    <DefaultLayout>
      <S.Layout>
        <Navigator />
        <section>{children}</section>
      </S.Layout>
    </DefaultLayout>
  );
};

namespace S {
  export const Layout = styled.div`
    width: 100%;
    height: 100%;
    display: flex;

    > section {
      flex-grow: 1;
      background-color: lightcoral;
    }
  `;
}
