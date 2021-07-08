import { motion } from 'framer-motion'
import React, { useState } from 'react'

const transition = {
  ease: 'easeInOut',
}

const variants = {
  readLess: {
    height: '3rem',
    transition,
  },
  readMore: {
    height: 'auto',
    transition,
  },
}

const Overview = ({ overview }) => {
  const [isReadingMore, setIsReadingMore] = useState(false)

  return (
    <div className='mt-5'>
      <h1 className='text-xl font-bold'>Overview</h1>
      <div className='mt-2 text-primary text-justify'>
        {overview?.length > 175 ? (
          <>
            <motion.p className='overflow-hidden' variants={variants} initial='readLess' animate={isReadingMore ? 'readMore' : 'readLess'}>
              {overview}
            </motion.p>
            <div className='flex items-center justify-end text-secondary text-xs cursor-pointer mt-2' onClick={() => setIsReadingMore(prev => !prev)}>
              {isReadingMore ? (
                <>
                  <span className='mr-2'>Show Less</span>
                  <i className='fas fa-angle-up'></i>
                </>
              ) : (
                <>
                  <span className='mr-2'>Show More</span>
                  <i className='fas fa-angle-down'></i>
                </>
              )}
            </div>
          </>
        ) : (
          <p>{overview}</p>
        )}
      </div>
    </div>
  )
}

export default Overview
