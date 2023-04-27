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
  margin-block: 34px;
  display: flex;
  gap: 10px;
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
