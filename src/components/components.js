import Image from './Image'
import Page from './page'
import Grid from './grid'
import Teaser from './teaser'
import Feature from './feature'
import NavItem from './nav_item'
import Splash from './splash/Splash'
import ComponentNotFound from './component_not_found'

const ComponentList = {
  Splash,
  Image,
  page: Page,
  grid: Grid,
  teaser: Teaser,
  feature: Feature,
  nav_item: NavItem
}

const Components = (type) => {
  if (typeof ComponentList[type] === 'undefined') {
    return ComponentNotFound
  }
  return ComponentList[type]
}

export default Components