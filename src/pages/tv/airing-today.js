import { useEffect, useState } from 'react'
import MediaGrid from '../../components/MediaGrid'
import Title from '../../components/Title'
import { fetcher } from '../../lib/Fetcher'
import { TV_AIRING_TODAY } from '../../lib/Requests'

const Popular = ({ data }) => {
  const [tvAiringToday, setTvAiringToday] = useState([])

  useEffect(() => {
    setTvAiringToday(data?.results)
  }, [data])

  return (
    <div className='px-12'>
      <Title title='TV Shows Airing Today' customClass='text-light' />
      {!tvAiringToday.length > 0 ? <p className='text-3xl text-primary'>Loading</p> : <MediaGrid media={tvAiringToday} type='tv' />}
    </div>
  )
}

export const getStaticProps = async () => {
  const data = await fetcher(TV_AIRING_TODAY)
  return {
    props: {
      title: 'TV Shows Airing Today',
      data,
    },
  }
}

export default Popular
