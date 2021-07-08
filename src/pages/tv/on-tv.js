import { useEffect, useState } from 'react'
import MediaGrid from '../../components/MediaGrid'
import Title from '../../components/Title'
import { fetcher } from '../../lib/Fetcher'
import { TV_ON_THE_AIR } from '../../lib/Requests'

const Popular = ({ data }) => {
  const [tvOnTheAir, setTvOnTheAir] = useState([])

  useEffect(() => {
    setTvOnTheAir(data?.results)
  }, [data])

  return (
    <div className='px-12'>
      <Title title='Currently Airing TV Shows' customClass='text-light' />
      {!tvOnTheAir.length > 0 ? <p className='text-3xl text-primary'>Loading</p> : <MediaGrid media={tvOnTheAir} type='tv' />}
    </div>
  )
}

export const getStaticProps = async () => {
  const data = await fetcher(TV_ON_THE_AIR)
  return {
    props: {
      title: 'Currently Airing TV Shows',
      data,
    },
  }
}

export default Popular
