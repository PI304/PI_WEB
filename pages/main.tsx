import { ReactElement } from 'react';
import { DefaultLayout } from '../components/layouts';
import { MainPage } from '../components/pages/main';
import { CustomHead } from '../components/seo';
import { Seo } from '../constants';

export default function main() {
  return (
    <>
      <CustomHead title={Seo.Title.main} />
      <MainPage />
    </>
  );
}

main.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};
