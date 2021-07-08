import { BASE_URL } from '../lib/Requests'
import moment from 'moment'
import { useRouter } from 'next/router'
import Rating from './Rating'
import { useEffect, useState } from 'react'
import { slugifyTitle } from '../lib/slugify'

const MediaCard = ({ id, type, image, title, date, rating, width }) => {
  const router = useRouter()
  const [slug, setSlug] = useState('')

  const viewDetails = id => {
    if (type === 'movie') {
      router.push(`/movies/${slug}/${id}`)
    } else {
      router.push(`/tv/${id}`)
    }
  }

  useEffect(() => {
    const slug = slugifyTitle(title && title)
    setSlug(slug)
  }, [id])

  return (
    <div className={`${width} h-full mt-3 mr-5 relative`} title={title} onClick={() => viewDetails(id)}>
      <img
        src={`${BASE_URL}/${image}`}
        alt={title}
        className='rounded-md shadow-md hover:shadow-2xl transform duration-300 hover:scale-105 cursor-pointer object-contain'
      />

      <div className='absolute top-1 left-1'>
        <Rating radius={45} rating={rating} size={50} strokeWidth={4} />
      </div>

      <div className='details mt-3 mx-2'>
        <p className='font-semibold text-light'>{title}</p>
        <div className='flex items-center text-primary'>
          <svg className='w-4 h-4 mr-2 text-secondary' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z'
            ></path>
          </svg>
          <span className='text-sm'>{moment(date).format('MMM DD, YYYY')}</span>
        </div>
      </div>
    </div>
  )
}
export default MediaCard
