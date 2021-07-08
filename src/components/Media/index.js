import { useEffect, useState } from 'react'
import Divider from '../Divider'
import Rating from '../Rating'
import Subtitle from '../Subtitle'
import Title from '../Title'
import Cast from './Cast'
import Director from './Director'
import Genres from './Genres'
import Overview from './Overview'
import Poster from './Poster'
import ReleaseAndRuntime from './ReleaseAndRuntime'
import TitleAndTag from './TitleAndTag'
import TrailerAndIMDB from './TrailerAndIMDB'
import CurrencyFormat from 'react-currency-format'

const MediaDetails = ({ media }) => {
  const [trailerKey, setTrailerKey] = useState('')

  useEffect(() => {
    const video = media?.videos?.results?.find(result => result.type === 'Trailer')
    setTrailerKey(video?.key)
  }, [media])

  return (
    <div className='h-full mt-4'>
      {/* header */}
      <div className='px-12 h-1/2 flex items-center'>
        {/* Poster */}
        <Poster path={media?.poster_path} title={media?.title || media?.original_title} />
        {/* media Details */}
        <div className='flex-1 text-light'>
          {/* title and tagline */}
          <TitleAndTag title={media?.title || media?.original_title} tagline={media?.tagline} />
          {/* Genres and release date */}
          <div className='mt-4 flex items-center text-xs font-bold'>
            <Genres genres={media?.genres} />

            <Divider customClass='h-6 ml-2' />

            <ReleaseAndRuntime media={media} />
          </div>
          {/* rating and trailer */}
          <div className='flex mt-4 items-center'>
            {/* rating */}
            <Rating radius={45} rating={media?.vote_average} size={80} strokeWidth={5} animate={true} />
            <Divider customClass='h-6 ml-4' />
            <TrailerAndIMDB trailerKey={trailerKey} imdbId={media?.imdb_id} />
          </div>
          {/* overview */}
          <div>
            <Overview overview={media?.overview} />
            <Director crew={media?.credits?.crew} />
          </div>
        </div>
      </div>
      {/* End of header */}
      <div className='mt-12 text-light flex'>
        <div className='w-4/5 pr-5'>
          <Title title='Cast and Crew' customClass='ml-12' />
          <Cast cast={media?.credits?.cast?.slice(0, 15)} />
        </div>
        <div className='flex-1 pr-12 px-8'>
          <div className='status mb-4'>
            <Subtitle text='Status' />
            <h1 className='text-lg'>{media?.status}</h1>
          </div>
          <div className='language mb-4'>
            <Subtitle text='Language' />
            <h1 className='text-lg'>{media?.spoken_languages?.[0].name}</h1>
          </div>
          <div className='budget mb-4'>
            <Subtitle text='Budget' />
            {media?.budget > 0 ? <CurrencyFormat value={media?.budget} displayType={'text'} thousandSeparator={true} prefix={'$'} /> : 'N/A'}
          </div>
          <div className='revenue mb-4'>
            <Subtitle text='Revenue' />
            {media?.revenue > 0 ? <CurrencyFormat value={media?.revenue} displayType={'text'} thousandSeparator={true} prefix={'$'} /> : 'N/A'}
          </div>
          <div className='keywords mb-4'>
            <Subtitle text='Keywords' />
            {media?.keywords?.keywords?.length > 0 ? (
              <div className='break-all'>
                {media?.keywords?.keywords?.map((keyword, index) => (
                  <span className='whitespace-nowrap text-sm rounded-full border px-3 border-secondary mr-2' key={index}>
                    {keyword.name}
                  </span>
                ))}
              </div>
            ) : (
              'N/A'
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MediaDetails
