import { fetcher } from '../lib/Fetcher'
import { DISCOVER_MOVIE, DISCOVER_TV, NOW_PLAYING, TRENDING_THIS_WEEK, TRENDING_TODAY } from '../lib/Requests'
import { Context } from '../lib/Context'
import { useContext, useEffect } from 'react'
import Discover from '../components/Discover'

export default function Home(props) {
  const { setValue } = useContext(Context)

  useEffect(() => {
    setValue(props)
  }, [])

  return <Discover />
}

const getNowPlaying = async () => {
  const nowPlaying = await fetcher(NOW_PLAYING)
  return nowPlaying
}

const discoverMovies = async () => {
  const discoverMovie = await fetcher(DISCOVER_MOVIE)
  return discoverMovie
}

const discoverTVs = async () => {
  const discoverTv = await fetcher(DISCOVER_TV)
  return discoverTv
}

const getTrendingToday = async () => {
  const trendingToday = await fetcher(TRENDING_TODAY)
  return trendingToday
}

const getTrendingThisWeek = async () => {
  const trendingThisWeek = await fetcher(TRENDING_THIS_WEEK)
  return trendingThisWeek
}

export const getStaticProps = async () => {
  const [nowPlaying, discoverMovie, discoverTv, trendingToday, trendingThisWeek] = await Promise.all([
    getNowPlaying(),
    discoverMovies(),
    discoverTVs(),
    getTrendingToday(),
    getTrendingThisWeek(),
  ])

  return {
    props: {
      title: 'Discover',
      nowPlaying,
      discoverMovie,
      discoverTv,
      trendingToday,
      trendingThisWeek,
    },
  }
}
