import {Children} from 'react';

const ComBreadcrumbs = ({children, separator, className}) => {
  const result = [];
  Children.forEach(children, (child) => {
    result.push(child);
    result.push(separator);
  });
  result.pop();
  return <nav className={className}>{result}</nav>;
};

export default ComBreadcrumbs;
