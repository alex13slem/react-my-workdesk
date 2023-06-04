import {Crumb} from '@SpaceX/UI/Buttons';
import UITopPanel from '@SpaceX/UI/TopPanel';
import ComBreadcrumbs from 'comComponents/ComBredcrumbs';
import {useLocation} from 'react-router-dom';
import styled from 'styled-components';

const Root = styled(UITopPanel)``;

const TopPanel = ({className, children}) => {
  const {pathname} = useLocation();
  return (
    <Root className={className}>
      <ComBreadcrumbs separator="-">
        <Crumb to={pathname}>Каталог</Crumb>
      </ComBreadcrumbs>
    </Root>
  );
};

export default TopPanel;
