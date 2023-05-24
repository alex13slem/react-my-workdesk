import {useDocumentTitle} from 'hooks';

import SectionGetStarted from '@GoCorona/sections/GetStarted';
import SectionStaySafe from '@GoCorona/sections/StaySafe';
import SectionExperts from '@GoCorona/sections/Experts';
import SectionHealthCare from '@GoCorona/sections/HealthCare';
import {useDocumentFavicon} from 'hooks/useDocumentFavicon';
import styled from 'styled-components';

const Main = styled.main`
  flex: 1 1 auto;
  overflow-x: hidden;
`;

const Home = ({className}) => {
  useDocumentTitle('alex13slem | GoCorona');
  useDocumentFavicon({
    ico: 'favicon/go-corona.png',
    svg: 'favicon/go-corona.svg',
  });
  return (
    <Main className={className}>
      <SectionGetStarted />
      <SectionStaySafe />
      <SectionExperts />
      <SectionHealthCare />
    </Main>
  );
};
export default Home;
