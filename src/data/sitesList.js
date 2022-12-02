import galactDesk from '../img/desktop/Galactigun.jpg'
import coronaDesk from '../img/desktop/GoCorona.jpg'
import spaceXDesk from '../img/desktop/SpaceX.jpg'
import zapovDesk from '../img/desktop/Zapovednik.jpg'
import uberDesk from '../img/desktop/Uber.jpg'

import galactTablet from '../img/tablet/Galactigun.jpg'
import coronaTablet from '../img/tablet/GoCorona.jpg'
import spaceXTablet from '../img/tablet/SpaceX.jpg'
import zapovTablet from '../img/tablet/Zapovednik.jpg'
import uberTablet from '../img/tablet/Uber.jpg'

import galactMobile from '../img/mobile/Galactigun.jpg'
import coronaMobile from '../img/mobile/GoCorona.jpg'
import spaceXMobile from '../img/mobile/SpaceX.jpg'
import zapovMobile from '../img/mobile/Zapovednik.jpg'
import uberMobile from '../img/mobile/Uber.jpg'

const sitesList = {
  Galactigun: {
    name: 'Galactigun',
    active: false,
    img: {
      desktop: galactDesk,
      tablet: galactTablet,
      mobile: galactMobile
    }
  },
  GoCorona: {
    name: 'GoCorona',
    active: true,
    img: {
      desktop: coronaDesk,
      tablet: coronaTablet,
      mobile: coronaMobile
    }
  },
  SpaceX: {
    name: 'SpaceX',
    active: true,
    img: {
      desktop: spaceXDesk,
      tablet: spaceXTablet,
      mobile: spaceXMobile
    }
  },
  Zapovednik: {
    name: 'Zapovednik',
    active: false,
    img: {
      desktop: zapovDesk,
      tablet: zapovTablet,
      mobile: zapovMobile
    }
  },
  UberEats: {
    name: 'UberEats',
    active: false,
    img: {
      desktop: uberDesk,
      tablet: uberTablet,
      mobile: uberMobile
    }
  }
}

export default sitesList
