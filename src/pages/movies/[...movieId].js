import React from 'react'
import { fetcher } from '../../lib/Fetcher'
import { MOVIE_DETAILS } from '../../lib/Requests'
import Media from '../../components/Media/index'

const Movie = ({ data }) => {
  return <Media media={data} />
}

export const getServerSideProps = async ({ query }) => {
  const movieId = parseInt(query.movieId[1])
  const data = await fetcher(`${MOVIE_DETAILS}/${movieId}?append_to_response=videos,credits,keywords`)

  return {
    props: { title: data?.title || data?.original_title, data },
  }
}

export default Movie
