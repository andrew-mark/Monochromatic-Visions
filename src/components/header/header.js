import React, {useState, useEffect, useContext} from 'react'
import './header.scss'
import MenuContext from '../../context/menu'
import ContentPanelContext from '../../context/contentPanel'
import { motion } from "framer-motion"

const Header = ({headline}) => {
  const [menu, openMenu] = useContext(MenuContext);
  const [panel, openPanel] = useContext(ContentPanelContext);
  const [letterSpacing, setLetterSpacing] = useState(5)
  const onOpenMenu = () => {
    menu ? openMenu(false) : openMenu(true)
    menu && openPanel(false)
  }

  // useEffect(() => {
  //   getViewportSingleUnit()
  //   window.addEventListener('resize', function onResizeHandler() {getViewportSingleUnit()})
  //   return () => {
  //     window.removeEventListener('resize', function onResizeHandler() {getViewportSingleUnit()})
  //   }
  // }, [])

  const getViewportSingleUnit = () => {
    const vw = window.innerWidth * 0.01
    setLetterSpacing(vw * 2)
    console.log(vw)
    // document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  return (
    <div className={`header ${menu ? 'is-active' : 'not-active'}`}>
      <motion.h1 className="header-headline">{headline}</motion.h1>
    </div>
  )
}

export default Header