import React, {useState} from 'react'
import './Splash.scss'
import SkyVideo from '@assets/videos/sky.mp4'
import AudioPlayer from '../audio-player/AudioPlayer'

const Splash = (props) => {
  // let letters = props.blok.Title
  // letters = letters.split(' ')
  // const firstWord = letters[0].split('')
  // const secondWord = letters[1].split('')
  const [activeSection, setActiveSection] = useState(null)

  const sections = [
    {
      name: 'Listen',
    },
    {
      name: 'Where',
      content: ''
    },
    {
      name: 'Who',
      content: 'Monochromatic Visions was conceived in 2014 while Arthur was lead guitarist and founding member of another band that had been thriving in the Greek indie rock scene for the past decade, after having inked a record deal with a major label at the age of 17. Their collective decision to leave their country (then in the depths of the debt crisis) was intended as a first step towards breaking out of the comfort and confines of the local scene and an attempt to reinvigorate their creative process but lead, paradoxically, to the rapid dismantling of that band and the birth of Monochromatic Vision’s first EP From Here To There. Having returned to his hometown and finding himself if not at a dead-end then perhaps in a long and winding tunnel, Arthur followed up with a second EP aptly named Waiting For The Light, until the self-titled Monochromatic Visions EP finally took form. These bedroom productions, released quietly on Soundcloud and Bandcamp without any fanfare, steadily garnered streams and attention from the DIY scene within and beyond the country’s borders. Monochromatic Visions went on to perform at numerous venues and festivals in Athens (GR) and supported acts such as Tonstartssbandht (of Mac De Marco’s guitarist Andy White) signed to Mexican Summer, and spiritual psychedelic rockers TAU of Fuzz Club Records. Their music was featured on shoegaze/psyche online platforms such as Brazil’s The Blog That Celebrates Itself by Renato Malizia who included their cover version of ‘Don’t Let Our Youth Go To Waste’ by Galaxie 500 on a tribute compilation, while Sydney-based Weisskalt Records featured single ‘Too Close To The Sea’ in a compilation alongside artists like Christian Bland, The Telescopes and King Gizzard & The Lizard Wizard. Ninja Tune artist Nabihah Iqbal played ‘Deep’ on her BBC radio show and in August 2019 the yet unreleased single ‘Farewell Summer’ was sync’d in a Red Bull Surfing episode about model and surfer Ivy Miller. Drawing inspiration from seemingly mundane emotions, observations and encounters, the music of Monochromatic Visions has morphed into a medley of shoegaze, dream pop, indie surf, new wave and psychedelic rock, with reverb-soaked guitars, minimalistic vocal shapes, repetitive synth lines and drum patterns interweaving to create visceral and nostalgic sketches of sound. Ultimately the music aims to tap into those blurry recollections our overstimulated, non-stop brains struggle to keep hold of.'
    }
  ]

  const selectSection = (index) => {
    activeSection === index ? setActiveSection(null) : setActiveSection(index)
  }

  return (
    <React.Fragment>
      <div className="splash">
        <div className="splash-left">
          <h1 className="splash-title">Monochromatic Visions</h1>
          <nav className="splash-nav">
            <ul className="splash-navList">
              {sections.map((item, index) => (
                <li key={`item-${index}`} className="splash-navListItem" onClick={() => selectSection(index)}>
                  <span>{item.name}</span>
                  {index === activeSection &&
                    <div className="splash-section">
                      {item.content}
                    </div>
                  }
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="splash-right">
          <div className="splash-media">
            <AudioPlayer />
            <video className="splash-video" muted autoPlay playsInline loop src={SkyVideo} type="video/mp4"></video>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Splash