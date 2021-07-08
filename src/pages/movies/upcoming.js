import { useEffect, useState } from 'react'
import LoadMore from '../../components/LoadMore'
import MediaGrid from '../../components/MediaGrid'
import Title from '../../components/Title'
import { fetcher } from '../../lib/Fetcher'
import { UPCOMING_MOVIES } from '../../lib/Requests'

const Upcoming = ({ data }) => {
  const [upcomingMovies, setUpcomingMovies] = useState([])

  useEffect(() => {
    setUpcomingMovies(prev => [...prev, ...data?.results])
  }, [data])

  return (
    <div className='px-12'>
      <Title title='Upcoming Movies' customClass='text-light' />
      {!upcomingMovies.length > 0 ? <p className='text-3xl text-primary'>Loading</p> : <MediaGrid media={upcomingMovies} type='movie' />}
      {/* load more button */}
      <LoadMore page={data?.page} />
    </div>
  )
}

export const getServerSideProps = async ({ query }) => {
  const page = query.page || 1
  const data = await fetcher(`${UPCOMING_MOVIES}?page=${page}`)

  return {
    props: {
      title: 'Upcoming Movies',
      data,
    },
  }
}

export default Upcoming
