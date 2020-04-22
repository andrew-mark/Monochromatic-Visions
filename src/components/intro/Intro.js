import React, {useState} from 'react'
import './Intro.scss'
import SkyVideo from '@assets/videos/sky.mp4'

const Intro = (props) => {
  const [activeSection, setActiveSection] = useState(null)

  const selectSection = (index) => {
    activeSection === index ? setActiveSection(null) : setActiveSection(index)
  }

  return (
    <div class="intro">
      <div class="intro-background">
        <div class="intro-title">
          Monochromatic Visions
        </div>
      </div>
    </div>
  )
}

export default Intro