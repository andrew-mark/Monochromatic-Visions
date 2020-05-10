import React, {useState, useContext} from 'react'
import './overlay.scss'
import MenuContext from '../../context/menu'
import ContentPanelContext from '../../context/contentPanel'
import { motion } from "framer-motion"

const Overlay = (props) => {
  const menu = useContext(MenuContext)[0]
  const panelOpen = useContext(ContentPanelContext)[0]
  const [panel, openPanel] = useContext(ContentPanelContext);
  const onPanelOpen = () => {
    openPanel(true)
  }

  const [hoverState, setHoverState] = useState({index: -1, value: false})
  const [activeItem, setActiveItem] = useState(false)

  const onSelection = (index) => {
    setActiveItem(index)
  }

  const animateMenu = {
    open: {
      x: '0%',
      transition: {
        ease: 'easeOut',
        duration: 0.3
      }
    },
    closed: {
      x: '100%',
      transition: {
        ease: 'easeOut',
        duration: 0.3,
        when: "afterChildren"
      }
    }
  }

  const menuList = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.4 }
    },
    closed: {
      transition: { staggerChildren: 0.05, delayChildren: 0, staggerDirection: -1}
    }
  }

  const menuItems = {
    open: {
      y: '0%',
      opacity: 1,
      transition: {
        ease: 'easeOut',
        duration: 0.3
      }
    },
    closed: {
      y: '150%',
      opacity: 0,
      transition: {
        ease: 'easeOut',
        duration: 0.3
      }
    }
  }

  const listItems = [
    {
      label: 'Who',
    },
    {
      label: 'Where'
    },
    {
      label: 'What'
    }
  ]

  return (
    <motion.div variants={animateMenu} initial={false} animate={menu ? "open" : "closed"} className="overlay">
      <div className="overlay-wrapper -wrapper">
        <div className="overlay-container -container">
          <div className="overlay-right">
            <motion.ul className="overlay-menu" variants={menuList}>
              {listItems.map((item, index) => (
                <motion.li
                  key={index}
                  onHoverStart={() => setHoverState({index: index, value: true}) }
                  onHoverEnd={() => setHoverState({index: -1 , value: false}) }
                  className={`overlay-menuItem ${hoverState.index === index && hoverState.value ? 'is-hovered': 'not-hovered'}`}
                  >
                  <motion.button className={`overlay-menuItemButton ${activeItem === index && panelOpen ? 'is-active' : 'not-active'}`}
                  initial={false}
                    variants={menuItems}
                    onClick={() => { onPanelOpen(); onSelection(index)} }>
                    {item.label}
                  </motion.button>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div className="overlay-content">
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Overlay