import {Link, NavLink} from 'react-router-dom';

const ComBtn = ({children, to, navigate, href, className, ...props}) => {
  const VarLink = navigate ? NavLink : Link;
  return to ? (
    <VarLink className={className} to={to} {...props}>
      {children}
    </VarLink>
  ) : href ? (
    <a className={className} href={href} {...props}>
      {children}
    </a>
  ) : (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default ComBtn;
