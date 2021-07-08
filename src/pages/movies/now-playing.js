import { useEffect, useState } from 'react'
import LoadMore from '../../components/LoadMore'
import Title from '../../components/Title'
import { fetcher } from '../../lib/Fetcher'
import { NOW_PLAYING } from '../../lib/Requests'
import MediaGrid from '../../components/MediaGrid'

const NowPlaying = ({ data }) => {
  const [nowPlaying, setNowPlaying] = useState([])

  useEffect(() => {
    setNowPlaying(prev => [...prev, ...data?.results])
  }, [data])

  return (
    <div className='px-12'>
      <Title title='Now Playing Movies' customClass='text-light' />
      {!nowPlaying.length > 0 ? <p className='text-3xl text-primary'>Loading</p> : <MediaGrid media={nowPlaying} type='movie' />}
      {/* load more button */}
      <LoadMore page={data?.page} />
    </div>
  )
}

export const getServerSideProps = async ({ query }) => {
  const page = query.page || 1
  const data = await fetcher(`${NOW_PLAYING}?page=${page}`)

  return {
    props: {
      title: 'Now Playing Movies',
      data,
    },
  }
}

export default NowPlaying
