import { ReactElement } from 'react';
import { WithNavigatorLayout } from '../components/layouts';
import { ValuePage } from '../components/pages/value';
import { CustomHead } from '../components/seo';
import { Seo } from '../constants/seo';

export default function value() {
  return (
    <>
      <CustomHead title={Seo.Title.value} />
      <ValuePage />
    </>
  );
}

value.getLayout = (page: ReactElement) => {
  return <WithNavigatorLayout>{page}</WithNavigatorLayout>;
};
