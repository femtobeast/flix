import { useEffect, useState } from 'react'
import LoadMore from '../../components/LoadMore'
import Title from '../../components/Title'
import { fetcher } from '../../lib/Fetcher'
import { TOP_RATED_MOVIES } from '../../lib/Requests'
import MediaGrid from '../../components/MediaGrid'

const TopRatedMovies = ({ data }) => {
  const [topRatedMovies, setTopRatedMovies] = useState([])

  useEffect(() => {
    setTopRatedMovies(prev => [...prev, ...data?.results])
  }, [data])

  return (
    <div className='px-12'>
      <Title title='Top Rated Movies' customClass='text-light' />
      {!topRatedMovies.length > 0 ? <p className='text-3xl text-primary'>Loading</p> : <MediaGrid media={topRatedMovies} type='movie' />}
      {/* load more button */}
      <LoadMore page={data?.page} />
    </div>
  )
}

export const getServerSideProps = async ({ query }) => {
  const page = query.page || 1
  const data = await fetcher(`${TOP_RATED_MOVIES}?page=${page}`)

  return {
    props: {
      title: 'Top Rated Movies',
      data,
    },
  }
}

export default TopRatedMovies
