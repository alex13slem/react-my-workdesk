import sitesList from 'data/sitesList';

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
      src: 'img-home/desktop/galactigun.webp',
      alt: galact.name,
      sizeAndPos: {
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
      src: 'img-home/desktop/gocorona.webp',
      alt: corona.name,
      sizeAndPos: {
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
      src: 'img-home/desktop/spacex.webp',
      alt: spacex.name,
      sizeAndPos: {
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
      src: 'img-home/desktop/zapovednik.webp',
      alt: zapov.name,
      sizeAndPos: {
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
      src: 'img-home/desktop/uber.webp',
      alt: uber.name,
      sizeAndPos: {
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
      src: 'img-home/tablet/galactigun.webp',
      alt: galact.name,
    },
    {
      id: 2,
      active: corona.active,
      src: 'img-home/tablet/gocorona.webp',
      alt: corona.name,
    },
    {
      id: 3,
      active: spacex.active,
      src: 'img-home/tablet/spacex.webp',
      alt: spacex.name,
    },
    {
      id: 4,
      active: zapov.active,
      src: 'img-home/tablet/zapovednik.webp',
      alt: zapov.name,
    },
    {
      id: 5,
      active: uber.active,
      src: 'img-home/tablet/uber.webp',
      alt: uber.name,
    },
  ],
  mobile: [
    {
      id: 1,
      active: galact.active,
      src: 'img-home/mobile/galactigun.webp',
      alt: galact.name,
    },
    {
      id: 2,
      active: corona.active,
      src: 'img-home/mobile/gocorona.webp',
      alt: corona.name,
    },
    {
      id: 3,
      active: spacex.active,
      src: 'img-home/mobile/spacex.webp',
      alt: spacex.name,
    },
    {
      id: 4,
      active: zapov.active,
      src: 'img-home/mobile/zapovednik.webp',
      alt: zapov.name,
    },
    {
      id: 5,
      active: uber.active,
      src: 'img-home/mobile/uber.webp',
      alt: uber.name,
    },
  ],
};
