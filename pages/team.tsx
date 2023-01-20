import TeamPage from '../components/pages/team/TeamPage';
import CustomHead from '../components/seo/CustomHead';
import { Seo } from '../constants/seo';
import { ReactElement } from 'react';
import { WithNavigatorLayout } from '../components/layouts';

export default function team() {
  return (
    <>
      <CustomHead title={Seo.Title.team} />
      <TeamPage />
    </>
  );
}

team.getLayout = (page: ReactElement) => {
  return <WithNavigatorLayout>{page}</WithNavigatorLayout>;
};
