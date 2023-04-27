import {useLayoutEffect, useState} from 'react';

export const useDocumentTitle = (title) => {
  const [documentTitle, setDocumentTitle] = useState(title);
  useLayoutEffect(() => {
    document.title = documentTitle;
  }, [documentTitle]);

  return [documentTitle, setDocumentTitle];
};
