import { useEffect, useState } from 'react'

const Director = ({ crew }) => {
  const [directors, setDirectors] = useState([])
  const [screenPlay, setScreenPlay] = useState([])
  const [writers, setWriters] = useState([])
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    setDirectors(crew?.filter(crew => crew.job === 'Director'))
    setScreenPlay(crew?.filter(crew => crew.job === 'Screenplay'))
    setWriters(crew?.filter(crew => crew.job === 'Writer'))
    setCharacters(crew?.filter(crew => crew.job === 'Characters'))
  }, [crew])

  return (
    <div className='flex mt-7'>
      <div className='mr-10'>
        {directors?.map((director, index) => (
          <span className='text-light text-md font-semibold' key={index}>
            {index !== 0 && <>,&nbsp;</>}
            {director.name}
          </span>
        ))}
        <p className='text-primary font-medium'>Director(s)</p>
      </div>

      {/* screenplay */}
      {screenPlay?.length > 0 && (
        <div className='mr-10'>
          {screenPlay?.map((screenplay, index) => (
            <span className='text-light text-md font-semibold' key={index}>
              {index !== 0 && <>,&nbsp;</>}
              {screenplay.name}
            </span>
          ))}
          <p className='text-primary font-medium'>Screenplay</p>
        </div>
      )}

      {/* writers */}
      {writers?.length > 0 && (
        <div className='mr-10'>
          {writers?.map((writer, index) => (
            <span className='text-light text-md font-semibold' key={index}>
              {index !== 0 && <>,&nbsp;</>}
              {writer.name}
            </span>
          ))}
          <p className='text-primary font-medium'>Writer(s)</p>
        </div>
      )}

      {/* characters */}
      {characters?.length > 0 && (
        <div className='mr-10'>
          {characters?.map((character, index) => (
            <span className='text-light text-md font-semibold' key={index}>
              {index !== 0 && <>,&nbsp;</>}
              {character.name}
            </span>
          ))}
          <p className='text-primary font-medium'>Characters</p>
        </div>
      )}
    </div>
  )
}

export default Director
