import React, { useState } from 'react'
import Divider from '../Divider'
import VideoPlayerModal from '../VideoPlayerModal'

const TrailerAndIMDB = ({ trailerKey, imdbId }) => {
  const [playingTrailer, setPlayingTrailer] = useState(false)

  return (
    <>
      <div className='flex items-center cursor-pointer opacity-75 hover:opacity-100 ml-3' onClick={() => setPlayingTrailer(true)}>
        {/* trailer */}
        <i className='fab fa-youtube text-primary mr-2'></i>
        <span>Play Trailer</span>
      </div>
      <Divider customClass='h-6 ml-4' />
      <a
        href={`https://www.imdb.com/title/${imdbId}`}
        target='_blank'
        rel='noopener noreferrer'
        className='text-secondary opacity-75 hover:opacity-100 tracking-wider ml-3'
        title='IMDB'
      >
        <i className='fab fa-imdb fa-2x'></i>
      </a>

      {/* trailer modal */}
      <VideoPlayerModal trailerKey={trailerKey} playingTrailer={playingTrailer} setPlayingTrailer={setPlayingTrailer} />
    </>
  )
}

export default TrailerAndIMDB
