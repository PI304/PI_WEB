import ValuePage from '../components/pages/value/ValuePage';
import CustomHead from '../components/seo/CustomHead';
import { Seo } from '../constants/seo';

export default function value() {
  return (
    <>
      <CustomHead title={Seo.Title.value} />
      <ValuePage />
    </>
  );
}
