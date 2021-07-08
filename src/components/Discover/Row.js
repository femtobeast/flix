import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import MediaCard from '../MediaCard'
import Switch from './Switch'
import { fadeIn, stagger } from '../../lib/anim'

const Row = ({ title, switchFirst, switchSecond, category }) => {
  const [index, setIndex] = useState(0)
  const [data, setData] = useState(null)
  const [mediaType, setMediaType] = useState('movie')

  const onSwitched = index => {
    setIndex(index)
    if (index === 0) {
      setMediaType('movie')
    } else {
      setMediaType('tv')
    }
  }

  useEffect(() => {
    setData(category[index])
  }, [category, index])

  return (
    <div className='mt-5'>
      <div className='flex justify-between items-center text-light px-12'>
        <p className='text-2xl font-semibold'>{title}</p>
        <Switch first={switchFirst} second={switchSecond} onChange={onSwitched} />
      </div>
      {/* movie cards */}
      {!data ? (
        <p className='text-3xl text-primary'>Loading</p>
      ) : (
        <motion.div
          variants={fadeIn}
          initial='initial'
          animate='animate'
          className='grid grid-rows-1 grid-flow-col gap-1 px-12 py-4 overflow-x-auto overflow-y-hidden scrollbar__none'
        >
          {data.results.map((result, index) => (
            <motion.div variants={stagger} key={index}>
              <MediaCard
                id={result.id}
                type={result.media_type || mediaType}
                image={result.poster_path}
                title={result.title || result.original_title || result.name || result.original_name}
                date={result.release_date || result.first_air_date}
                rating={result.vote_average}
                width='w-40'
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  )
}

export default Row
