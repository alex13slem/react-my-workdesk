import {Crumb} from '@SpaceX/UI/Buttons';
import UITopPanel from '@SpaceX/UI/TopPanel';
import {useHeaderValues} from '@SpaceX/store';
import ComBreadcrumbs from 'components/ComBredcrumbs';
import {useLocation} from 'react-router-dom';

const TopPanel = ({className}) => {
  const {pathname} = useLocation();

  const {reverseTop} = useHeaderValues();

  return (
    <UITopPanel className={className} style={{top: `${reverseTop}px`}}>
      <ComBreadcrumbs separator="-">
        <Crumb to={pathname}>Каталог</Crumb>
      </ComBreadcrumbs>
    </UITopPanel>
  );
};

export default TopPanel;
