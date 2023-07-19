import styled from 'styled-components';
import Wrap from '../../UI/Wrap';
import HeroCard from '../../components/HeroCard';
import Projects from '../../components/Projects';

import projectsDataJson from 'data/siteList.json';

const Root = styled(Wrap)`
  padding-block: 32px;
  display: flex;

  gap: 32px;

  @media (max-width: 1011.98px) {
    flex-direction: column;
  }

  .projects {
    flex: 1;
  }
`;

const Dashboard = () => {
  const projectsData = [...projectsDataJson];
  return (
    <Root>
      <HeroCard className="hero-card" />
      <Projects className="projects" data={projectsData} />
    </Root>
  );
};

export default Dashboard;
