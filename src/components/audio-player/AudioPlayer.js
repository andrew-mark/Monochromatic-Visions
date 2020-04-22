import React, {useState, useEffect} from 'react'
import ReactPlayer from 'react-player'

import './AudioPlayer.scss'

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentAudioFile: require('../../assets/audio/sample.mp3'),
      playing: false
    }
  }

  handlePlayPause = () => {
    this.setState({ playing: !this.state.playing })
  }

  render() {
    return (
      <div className="mono-audioPlayer">
        <ReactPlayer
          playing={this.state.playing}
          className='react-player'
          url={this.state.currentAudioFile}
          width='100%'
          height='100%'
        />
        <span onClick={() => this.handlePlayPause()}>Play</span>
      </div>
    )
  }
}

export default AudioPlayer