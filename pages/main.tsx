import { Seo } from '../constants/seo';
import { ReactElement } from 'react';
import { DefaultLayout } from '../components/layouts';
import { CustomHead } from '../components/seo';
import { MainPage } from '../components/pages/main';

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
