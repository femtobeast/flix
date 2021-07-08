import { useEffect, useState } from 'react'
import MediaGrid from '../../components/MediaGrid'
import Title from '../../components/Title'
import { fetcher } from '../../lib/Fetcher'
import { TOP_RATED_TV_SHOWS } from '../../lib/Requests'

const Popular = ({ data }) => {
  const [topRatedTv, setTopRatedTv] = useState([])

  useEffect(() => {
    setTopRatedTv(data?.results)
  }, [data])

  return (
    <div className='px-12'>
      <Title title='Top Rated TV Shows' customClass='text-light' />
      {!topRatedTv.length > 0 ? <p className='text-3xl text-primary'>Loading</p> : <MediaGrid media={topRatedTv} type='tv' />}
    </div>
  )
}

export const getStaticProps = async () => {
  const data = await fetcher(TOP_RATED_TV_SHOWS)
  return {
    props: {
      title: 'Top Rated TV Shows',
      data,
    },
  }
}

export default Popular
