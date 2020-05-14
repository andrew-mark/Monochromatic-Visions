import React, {useState, useContext} from 'react'
import './overlay.scss'
import MenuContext from '../../context/menu'
import ContentPanelContext from '../../context/contentPanel'
import { motion } from "framer-motion"

const Overlay = (props) => {
  const menu = useContext(MenuContext)[0]
  const [panel, openPanel] = useContext(ContentPanelContext);
  const onPanelOpen = (index) => {
    openPanel({open: true, content: index})
  }

  const [hoverState, setHoverState] = useState({index: -1, value: false})

  const animateMenu = {
    open: {
      scaleX: 1,
      // x: '0%',
      transition: {
        ease: 'easeOut',
        duration: 0.4,
      }
    },
    closed: {
      // x: '161%',
      scaleX: 0,
      transition: {
        ease: 'easeIn',
        duration: 0.4,
        delay: 0.3
      }
    }
  }

  const animateExclusion = {
    open: {
      scaleX: 1,
      // x: '0%',
      transition: {
        ease: 'easeOut',
        duration: 0.4
      }
    },
    closed: {
      scaleX: 0,
      // x: '101%',
      transition: {
        ease: 'easeIn',
        duration: 0.4,
        delay: 0.3
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
      label: 'Album'
    },
    {
      label: 'Gigs'
    }
  ]

  return (
    <React.Fragment>
      <motion.div className="overlay-exclusion" variants={animateExclusion} initial={false} animate={menu ? "open" : "closed"}>
      </motion.div>
      <motion.div animate={menu ? "open" : "closed"} initial={false} className="overlay">
        <div className="overlay-wrapper -wrapper">
          <div className="overlay-container -container">
            <motion.div className={`overlay-right ${menu ? "is-open" : "is-closed"}`}  initial={false} variants={animateMenu}>
              <motion.div className="overlay-rightContainer">
                <motion.ul className="overlay-menu" variants={menuList}>
                  {listItems.map((item, index) => (
                    <motion.li
                      key={index}
                      onHoverStart={() => setHoverState({index: index, value: true}) }
                      onHoverEnd={() => setHoverState({index: -1 , value: false}) }
                      className={`overlay-menuItem ${hoverState.index === index && hoverState.value ? 'is-hovered': 'not-hovered'}`}
                      >
                      <motion.button className={`overlay-menuItemButton ${panel.content === index && panel.open ? 'is-active' : 'not-active'}`}
                        initial={false}
                        variants={menuItems}
                        onClick={() => { onPanelOpen(index)} }>
                        {item.label}
                      </motion.button>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
              <motion.div className="overlay-content">
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </React.Fragment>
  )
}

export default Overlay