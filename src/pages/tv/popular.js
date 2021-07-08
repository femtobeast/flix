import { useEffect, useState } from 'react'
import MediaGrid from '../../components/MediaGrid'
import Title from '../../components/Title'
import { fetcher } from '../../lib/Fetcher'
import { POPULAR_TV_SHOWS } from '../../lib/Requests'

const Popular = ({ data }) => {
  const [popularTvShows, setPopularTvShows] = useState([])

  useEffect(() => {
    setPopularTvShows(data?.results)
  }, [data])

  return (
    <div className='px-12'>
      <Title title='Popular TV Shows' customClass='text-light' />
      {!popularTvShows.length > 0 ? <p className='text-3xl text-primary'>Loading</p> : <MediaGrid media={popularTvShows} type='tv' />}
    </div>
  )
}

export const getStaticProps = async () => {
  const data = await fetcher(POPULAR_TV_SHOWS)
  return {
    props: {
      title: 'Popular TV Shows',
      data,
    },
  }
}

export default Popular
