import styled from 'styled-components';
import {ProjectItem} from './ProjectItem';

const Root = styled.div`
  display: grid;
  align-content: start;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 767.98px) {
    grid-template-columns: 1fr;
  }
`;

const Projects = ({className, data = []}) => {
  console.log(data);
  return (
    <Root className={className}>
      {data?.map((prjct) => (
        <ProjectItem key={prjct.id} data={prjct} />
      ))}
    </Root>
  );
};

export default Projects;
