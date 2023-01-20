import MainPage from '../components/pages/main/MainPage';
import CustomHead from '../components/seo/CustomHead';
import { Seo } from '../constants/seo';

export default function main() {
  return (
    <>
      <CustomHead title={Seo.Title.main} />
      <MainPage />
    </>
  );
}
