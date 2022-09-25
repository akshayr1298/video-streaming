
import React from 'react'
import ReactPlayer from 'react-player/youtube'
import './videos.css'

function Videos() {
  return (
    <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=eRaNXtcThww'
          width='50%'
          height='50%'
        />
      </div>
  )
}

export default Videos
