import TeamPage from '../components/pages/team/TeamPage';
import CustomHead from '../components/seo/CustomHead';
import { Seo } from '../constants/seo';

export default function team() {
  return (
    <>
      <CustomHead title={Seo.Title.team} />
      <TeamPage />
    </>
  );
}
