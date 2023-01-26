import { ReactElement } from 'react';
import { WithoutWidgetLayout } from '../components/layouts/WithoutWidgetLayout';
import { NotFoundPage } from '../components/pages/notFound';

export default function _404Page() {
  return (
    <>
      <NotFoundPage />
    </>
  );
}

_404Page.getLayout = (page: ReactElement) => {
  return <WithoutWidgetLayout>{page}</WithoutWidgetLayout>;
};
