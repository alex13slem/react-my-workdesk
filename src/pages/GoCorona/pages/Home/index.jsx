import {useDocumentTitle} from 'hooks';

import SectionGetStarted from '@GoCorona/sections/GetStarted';
import SectionStaySafe from '@GoCorona/sections/StaySafe';
import SectionExperts from '@GoCorona/sections/Experts';
import SectionHealthCare from '@GoCorona/sections/HealthCare';
import {useDocumentFavicon} from 'hooks/useDocumentFavicon';
import styled from 'styled-components';
import {useSelectorStyle} from 'hooks/useSelectorStyle';

const Main = styled.main``;

const Home = ({className}) => {
  useDocumentTitle('alex13slem | GoCorona');
  useDocumentFavicon({
    ico: 'favicon/go-corona.png',
    svg: 'favicon/go-corona.svg',
  });
  useSelectorStyle(
    ':root',
    `
  --sb-c-bg: #fff;
  --sb-c-tb: #ec5863;
  `
  );
  return (
    <Main className={className}>
      {/* <SectionGetStarted />
      <SectionStaySafe />
      <SectionExperts />
      <SectionHealthCare /> */}
    </Main>
  );
};
export default Home;
