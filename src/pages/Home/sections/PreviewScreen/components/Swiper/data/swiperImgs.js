import sitesList from '/src/data/sitesList.js';

const {
  Galactigun: galact,
  GoCorona: corona,
  SpaceX: spacex,
  Zapovednik: zapov,
  UberEats: uber,
} = sitesList;

export const swiperImgs = {
  desktop: [
    {
      id: 1,
      active: galact.active,
      src: galact.img.desktop,
      alt: galact.name,
      btnSizePos: {
        bottom: '39.5%',
        left: '11.8%',
        width: '37.6%',
        height: '12.7%',
      },
      navLink: `/${galact.name.toLowerCase()}`,
    },
    {
      id: 2,
      active: corona.active,
      src: corona.img.desktop,
      alt: corona.name,
      btnSizePos: {
        bottom: '39.5%',
        left: '11.8%',
        width: '31%',
        height: '12.7%',
      },
      navLink: `/${corona.name.toLowerCase()}`,
    },
    {
      id: 3,
      active: spacex.active,
      src: spacex.img.desktop,
      alt: spacex.name,
      btnSizePos: {
        bottom: '39.5%',
        left: '11.8%',
        width: '31%',
        height: '12.7%',
      },
      navLink: `/${spacex.name.toLowerCase()}`,
    },
    {
      id: 4,
      active: zapov.active,
      src: zapov.img.desktop,
      alt: zapov.name,
      btnSizePos: {
        bottom: '26.8%',
        left: '11.7%',
        width: '11.8%',
        height: '26%',
      },
      navLink: `/${zapov.name.toLowerCase()}`,
    },
    {
      id: 5,
      active: uber.active,
      src: uber.img.desktop,
      alt: uber.name,
      btnSizePos: {
        bottom: '39.5%',
        left: '11.7%',
        width: '37.9%',
        height: '12.7%',
      },
      navLink: `/${uber.name.toLowerCase()}`,
    },
  ],
  tablet: [
    {
      id: 1,
      active: galact.active,
      src: galact.img.tablet,
      alt: galact.name,
    },
    {
      id: 2,
      active: corona.active,
      src: corona.img.tablet,
      alt: corona.name,
    },
    {
      id: 3,
      active: spacex.active,
      src: spacex.img.tablet,
      alt: spacex.name,
    },
    {
      id: 4,
      active: zapov.active,
      src: zapov.img.tablet,
      alt: zapov.name,
    },
    {
      id: 5,
      active: uber.active,
      src: uber.img.tablet,
      alt: uber.name,
    },
  ],
  mobile: [
    {
      id: 1,
      active: galact.active,
      src: galact.img.mobile,
      alt: galact.name,
    },
    {
      id: 2,
      active: corona.active,
      src: corona.img.mobile,
      alt: corona.name,
    },
    {
      id: 3,
      active: spacex.active,
      src: spacex.img.mobile,
      alt: spacex.name,
    },
    {
      id: 4,
      active: zapov.active,
      src: zapov.img.mobile,
      alt: zapov.name,
    },
    {
      id: 5,
      active: uber.active,
      src: uber.img.mobile,
      alt: uber.name,
    },
  ],
};
