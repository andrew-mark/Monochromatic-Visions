import Image from './Image'
import Biography from './biography/biography'
import Page from './page'
import Grid from './grid'
import Footer from './footer/footer'
import Header from './header/header'
import Teaser from './teaser'
import Feature from './feature'
import Main from './main/main'
import NavItem from './nav_item'
import Discography from './discography/discography'
import Disc from './disc/disc'
import ComponentNotFound from './component_not_found'

const ComponentList = {
  Biography,
  Image,
  page: Page,
  Footer,
  Header,
  grid: Grid,
  teaser: Teaser,
  feature: Feature,
  nav_item: NavItem,
  Main,
  Discography,
  Disc
}

const Components = (type) => {
  if (typeof ComponentList[type] === 'undefined') {
    return ComponentNotFound
  }
  return ComponentList[type]
}

export default Components