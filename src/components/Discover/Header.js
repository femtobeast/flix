import { useEffect, useState } from 'react'
import { BASE_URL } from '../../lib/Requests'
import Link from 'next/link'
import { slugifyTitle } from '../../lib/slugify'

const Header = ({ nowPlaying }) => {
	const [headerMovie, setHeaderMovie] = useState(null)
	const [slug, setSlug] = useState('')

	useEffect(() => {
		const movie = nowPlaying?.results[Math.floor(Math.random() * nowPlaying?.results?.length - 1)]
		setHeaderMovie(movie)
		const slug = slugifyTitle(movie?.title || movie?.original_title)
		setSlug(slug)
	}, [nowPlaying])

	return (
		<Link href={`/movies/${slug}/${headerMovie?.id}`}>
			<header
				className='h-100 rounded-md mb-6 mx-12 bg-no-repeat bg-top bg-cover text-white flex flex-col justify-end cursor-pointer'
				style={{
					backgroundImage: `url("${BASE_URL}/${headerMovie?.backdrop_path}")`,
				}}
			>
				<div className='flex flex-col p-5 bg-gradient-to-t from-bottom to-transparent'>
					<h1 className='font-extrabold text-2xl tracking-wide'>{headerMovie?.title || headerMovie?.original_title}</h1>
					<span className='text-light mt-1'>
						<i className='fas fa-star'></i> {headerMovie?.vote_average}
					</span>
					<p className='w-5/12 text-gray-200 mt-2 text-sm'>
						{headerMovie?.overview?.length > 200 ? `${headerMovie?.overview?.substring(0, 201)}...` : headerMovie?.overview}
					</p>
				</div>
			</header>
		</Link>
	)
}

export default Header
