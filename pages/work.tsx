import { ReactElement } from 'react';
import { WithNavigatorLayout } from '../components/layouts';
import { WorkPage } from '../components/pages/work';
import { CustomHead } from '../components/seo';
import { Seo } from '../constants';

export default function work() {
  return (
    <>
      <CustomHead title={Seo.Title.work} />
      <WorkPage />
    </>
  );
}

work.getLayout = (page: ReactElement) => {
  return <WithNavigatorLayout>{page}</WithNavigatorLayout>;
};
