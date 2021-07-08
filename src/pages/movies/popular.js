import Title from '../../components/Title'
import { fetcher } from '../../lib/Fetcher'
import { POPULAR_MOVIES } from '../../lib/Requests'
import { useEffect, useState } from 'react'
import LoadMore from '../../components/LoadMore'
import MediaGrid from '../../components/MediaGrid'

const Popular = ({ data }) => {
  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    setPopularMovies(prev => [...prev, ...data?.results])
  }, [data])

  return (
    <div className='px-12'>
      <Title title='Popular Movies' customClass='text-light' />
      {!popularMovies.length > 0 ? <p className='text-3xl text-primary'>Loading</p> : <MediaGrid media={popularMovies} type='movie' />}
      {/* load more button */}
      <LoadMore page={data?.page} />
    </div>
  )
}

export const getServerSideProps = async ({ query }) => {
  const page = query.page || 1
  const data = await fetcher(`${POPULAR_MOVIES}?page=${page}`)

  return {
    props: {
      title: 'Popular Movies',
      data,
    },
  }
}

export default Popular
