import {useLayoutEffect, useState} from 'react';

export const useDocumentFavicon = (favicon) => {
  const SVG = {
    REL: 'icon',
    TYPE: 'image/svg+xml',
  };
  const ICO = {
    REL: 'shortcut icon',
    TYPE: 'image/x-icon',
  };

  const [documentFavicon, setDocumentFavicon] = useState(favicon);

  let linkIco = document.querySelector(`link[type='${ICO.TYPE}']`);
  let linkSvg = document.querySelector(`link[type='${SVG.TYPE}']`);

  const hrefWODomain = (link) =>
    link.href.replace(`http://${window.location.host}/`, '');

  const addedIco = () => {
    if (documentFavicon.ico) {
      if (!linkIco) {
        linkIco = document.createElement('link');
        linkIco.rel = ICO.REL;
        linkIco.type = ICO.TYPE;
        document.head.appendChild(linkIco);
      }
      if (hrefWODomain(linkIco) != documentFavicon.ico) {
        linkIco.href = documentFavicon.ico;
      }
    }
  };

  const addedSvg = () => {
    if (documentFavicon.svg) {
      if (!linkSvg) {
        linkSvg = document.createElement('link');
        linkSvg.rel = SVG.REL;
        linkSvg.type = SVG.TYPE;
        document.head.appendChild(linkSvg);
      }
      if (hrefWODomain(linkSvg) != documentFavicon.svg) {
        linkSvg.href = documentFavicon.svg;
      }
    }
  };

  const removeIco = () => {
    !documentFavicon.ico && linkIco?.parentNode?.removeChild(linkIco);
  };

  const removeSvg = () => {
    !documentFavicon.svg && linkSvg?.parentNode?.removeChild(linkSvg);
  };

  useLayoutEffect(() => {
    removeIco();
    removeSvg();
    addedIco();
    addedSvg();
  }, [documentFavicon.ico, documentFavicon.svg, linkIco, linkSvg]);

  return [documentFavicon, setDocumentFavicon];
};
