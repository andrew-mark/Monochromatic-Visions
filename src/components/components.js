import Biography from './biography/biography'
import Contact from './contact/contact'
import Disc from './disc/disc'
import Discography from './discography/discography'
import Footer from './footer/footer'
import Header from './header/header'
import Headline from './headline/headline'
import Image from './Image'
import Main from './main/main'
import Page from './page'
import Shows from './shows/shows'
import ComponentNotFound from './component_not_found'

const ComponentList = {
  Biography,
  Contact,
  Image,
  page: Page,
  Footer,
  Header,
  Headline,
  Main,
  Discography,
  Disc,
  shows: Shows
}

const Components = (type) => {
  if (typeof ComponentList[type] === 'undefined') {
    return ComponentNotFound
  }
  return ComponentList[type]
}

export default Components