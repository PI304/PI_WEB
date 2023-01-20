import { Seo } from '../constants/seo';
import { ReactElement } from 'react';
import { WithNavigatorLayout } from '../components/layouts';
import { TeamPage } from '../components/pages/team';
import { CustomHead } from '../components/seo';

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
