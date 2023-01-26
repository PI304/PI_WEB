import { ReactElement } from 'react';
import { WithoutWidgetLayout } from '../components/layouts';
import { NotFoundPage } from '../components/pages/notFound';
import { CustomHead } from '../components/seo';
import { Seo } from '../constants/seo';

export default function _404Page() {
  return (
    <>
      <CustomHead title={Seo.Title.notFound} />
      <NotFoundPage />
    </>
  );
}

_404Page.getLayout = (page: ReactElement) => {
  return <WithoutWidgetLayout>{page}</WithoutWidgetLayout>;
};
