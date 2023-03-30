import {Link, NavLink} from 'react-router-dom';

export const ComBtn = ({children, to, navigate, href, ...args}) => {
  const VarLink = navigate ? NavLink : Link;
  return to ? (
    <VarLink to={to} {...args}>
      {children}
    </VarLink>
  ) : href ? (
    <a href={href} {...args}>
      {children}
    </a>
  ) : (
    <button {...args}>{children}</button>
  );
};
