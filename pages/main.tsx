import MainPage from '../components/pages/main/MainPage';
import CustomHead from '../components/seo/CustomHead';
import { Seo } from '../constants/seo';
import { ReactElement } from 'react';
import { DefaultLayout } from '../components/layouts';

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
