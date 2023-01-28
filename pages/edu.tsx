import { ReactElement } from 'react';
import { WithNavigatorLayout } from '../components/layouts';
import { EduPage } from '../components/pages/edu';
import { CustomHead } from '../components/seo';
import { Seo } from '../constants';

export default function edu() {
  return (
    <>
      <CustomHead title={Seo.Title.edu} />
      <EduPage />
    </>
  );
}

edu.getLayout = (page: ReactElement) => {
  return <WithNavigatorLayout>{page}</WithNavigatorLayout>;
};
