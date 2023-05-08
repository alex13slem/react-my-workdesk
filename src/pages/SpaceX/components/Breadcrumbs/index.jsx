import ComBreadcrumbs from 'comComponents/ComBredcrumbs';
import styled from 'styled-components';
import {Crumb} from './Crumb';
import {useLocation} from 'react-router-dom';
import {LayoutWrap} from '../Layout';

const Root = styled(ComBreadcrumbs)`
  position: relative;
  padding-block: 12px;
  margin-block: 32px;
  display: flex;
  gap: 10px;

  background-color: #00000036;
  border-block: 1px solid rgba(152, 147, 147, 0.21);
`;

const Wrap = styled(LayoutWrap)``;

const Breadcrumbs = ({className}) => {
  const {pathname} = useLocation();

  return (
    <Root className={className} separator={'-'}>
      <Wrap>
        <Crumb to={pathname}>Каталог</Crumb>
      </Wrap>
    </Root>
  );
};

export default Breadcrumbs;
