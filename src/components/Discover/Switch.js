import { motion } from 'framer-motion'
import { useState } from 'react'

const variants = {
  first: {
    x: 0,
    transition: {
      duration: '0.3',
    },
  },
  second: {
    x: '100%',
    transition: {
      duration: '0.3',
    },
  },
}

const Switch = ({ first, second, onChange }) => {
  const [active, setActive] = useState(first)

  return (
    <div className='flex items-center justify-between rounded-full border border-primary relative w-52'>
      <button
        className='rounded-full z-10 px-3 py-1 outline-none focus:outline-none'
        onClick={() => {
          setActive(first)
          onChange(0)
        }}
      >
        <span className='text-sm'>{first}</span>
      </button>

      <motion.div
        className='bg-secondary absolute h-full w-1/2 rounded-full'
        initial='first'
        animate={active === first ? 'first' : 'second'}
        variants={variants}
        style={{ height: '35px' }}
      ></motion.div>

      <button
        className='rounded-full px-3 z-10 outline-none focus:outline-none'
        onClick={() => {
          setActive(second)
          onChange(1)
        }}
      >
        <span className='text-sm'>{second}</span>
      </button>
    </div>
  )
}

export default Switch
