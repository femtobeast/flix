import { useContext } from 'react'
import { Context } from '../../lib/Context'
import dynamic from 'next/dynamic'
import Header from './Header'

const Row = dynamic(() => import('./Row'))

const Discover = () => {
  const { value } = useContext(Context)
  const discover = [value?.discoverMovie, value?.discoverTv]
  const trending = [value?.trendingToday, value?.trendingThisWeek]

  return (
    <>
      <Header nowPlaying={value?.nowPlaying} />
      <Row title='Popular' switchFirst='In Theatres' switchSecond='On TV' category={discover} />
      <Row title='Trending' switchFirst='Today' switchSecond='This Week' category={trending} />
    </>
  )
}

export default Discover
