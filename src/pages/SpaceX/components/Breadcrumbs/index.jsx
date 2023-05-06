import ComBreadcrumbs from 'comComponents/ComBredcrumbs';
import styled from 'styled-components';
import {Crumb} from './Crumb';
import {
  unstable_HistoryRouter,
  useActionData,
  useLocation,
  useNavigate,
  useResolvedPath,
  useRoutes,
} from 'react-router-dom';

const Root = styled(ComBreadcrumbs)`
  position: relative;
  padding-block: 12px;
  margin-block: 32px;
  display: flex;
  gap: 10px;

  background-size: 1000% 100%;
  &::after {
    content: '';
    position: absolute;
    width: 100vw;
    height: 100%;
    inset: 0;

    background-color: #00000036;
  }
`;

const Breadcrumbs = ({className}) => {
  const {pathname} = useLocation();

  return (
    <Root className={className} separator={'-'}>
      <Crumb to={pathname}>Каталог</Crumb>
    </Root>
  );
};

export default Breadcrumbs;
