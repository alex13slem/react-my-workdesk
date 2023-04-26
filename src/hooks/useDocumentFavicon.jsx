import {useLayoutEffect, useState} from 'react';

export const useDocumentFavicon = (favicon) => {
  const [documentFavicon, setDocumentFavicon] = useState(favicon);
  useLayoutEffect(() => {
    if (documentFavicon?.ico) {
      let linkIco = document.querySelector("link[rel~='icon'][sizes*='any']");
      if (!linkIco) {
        linkIco = document.createElement('link');
        linkIco.rel = 'icon';
        linkIco.sizes = 'any';
        document.head.appendChild(linkIco);
      }
      linkIco.href = documentFavicon.ico;
    } else {
      let linkIco = document.querySelector("link[rel~='icon'][sizes*='any']");
      if (linkIco) {
        linkIco.parentNode.removeChild(linkIco);
      }
    }
  }, [documentFavicon.ico]);
  useLayoutEffect(() => {
    if (documentFavicon?.svg) {
      let linkSvg = document.querySelector("link[rel~='icon'][type*='svg']");
      if (!linkSvg) {
        linkSvg = document.createElement('link');
        linkSvg.rel = 'icon';
        linkSvg.type = 'image/svg+xml';
        document.head.appendChild(linkSvg);
      }
      linkSvg.href = documentFavicon.svg;
      console.log(linkSvg.href);
    } else {
      let linkSvg = document.querySelector("link[rel~='icon'][type*='svg']");
      if (linkSvg) {
        linkSvg.parentNode.removeChild(linkSvg);
      }
    }
  }, [documentFavicon.svg]);

  return [documentFavicon, setDocumentFavicon];
};
