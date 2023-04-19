import {formatClassName} from './format';

export const setNavLinkStyle =
  (classBasic, classActive) =>
  ({isActive}) =>
    isActive ? formatClassName(classBasic, classActive) : classBasic;
