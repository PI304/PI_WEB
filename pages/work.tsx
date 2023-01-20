import { ReactElement } from 'react';
import { WithNavigatorLayout } from '../components/layouts';
import WorkPage from '../components/pages/work/WorkPage';
import CustomHead from '../components/seo/CustomHead';
import { Seo } from '../constants/seo';

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
