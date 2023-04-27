import {useLayoutEffect, useState} from 'react';

export const useDocumentFavicon = (favicon) => {
  const [documentFavicon, setDocumentFavicon] = useState(favicon);
  let linkIco = document.querySelector("link[type='image/x-icon']");
  let linkSvg = document.querySelector("link[type='image/svg+xml']");

  const hrefWODomain = (link) =>
    link.href.replace(`http://${window.location.host}/`, '');

  const addedIco = () => {
    if (documentFavicon.ico) {
      if (!linkIco) {
        linkIco = document.createElement('link');
        linkIco.rel = 'shortcut icon';
        linkIco.type = 'image/x-icon';
        document.head.appendChild(linkIco);
      }
      if (hrefWODomain(linkIco) != documentFavicon.ico) {
        linkIco.href = documentFavicon.ico;
        console.log('added Ico-link');
      }
    }
  };

  const addedSvg = () => {
    if (documentFavicon.svg) {
      if (!linkSvg) {
        linkSvg = document.createElement('link');
        linkSvg.rel = 'icon';
        linkSvg.type = 'image/svg+xml';
        document.head.appendChild(linkSvg);
      }
      if (hrefWODomain(linkSvg) != documentFavicon.svg) {
        linkSvg.href = documentFavicon.svg;
        console.log('added svg-link');
      }
    }
  };

  const removeIco = () =>
    !documentFavicon.ico && linkIco && linkIco.parentNode.removeChild(linkIco);

  const removeSvg = () =>
    !documentFavicon.svg && linkSvg && linkSvg.parentNode.removeChild(linkSvg);

  useLayoutEffect(() => {
    removeIco();
    removeSvg();
    addedIco();
    addedSvg();
  }, [documentFavicon.ico, documentFavicon.svg, linkIco, linkSvg]);

  return [documentFavicon, setDocumentFavicon];
};
