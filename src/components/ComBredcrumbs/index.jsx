import {Children} from 'react';

const ComBreadcrumbs = ({children, separator, className}) => {
  let result;
  if (children?.length) {
    result = [];
    Children.forEach(children, (child) => {
      result.push(child);
      result.push(separator);
    });
    result.pop();
  } else {
    result = children;
  }
  return <nav className={className}>{result}</nav>;
};

export default ComBreadcrumbs;
