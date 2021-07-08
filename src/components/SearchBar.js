import Image from 'next/image'
import { useEffect, useState } from 'react'

const SearchBar = () => {
	const [scrolled, setScrolled] = useState(false)

	const handleScroll = (e) => {
		if (e.target.scrollTop > 50) {
			setScrolled(true)
		} else {
			setScrolled(false)
		}
	}

	useEffect(() => {
		document.querySelector('.main__content').addEventListener('scroll', handleScroll)
		return () => {
			document.querySelector('.main__content').removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<div
			className={`fixed top-0 z-20 px-12 py-5 flex justify-between items-center w-10/12 text-primary duration-300 ${
				scrolled && 'bg-content shadow-2xl'
			}`}
		>
			{/* Genres */}
			<div className='flex items-center cursor-pointer'>
				<span className='text-primary font-semibold'>All Genres</span>
				<i className='fas fa-angle-down ml-2'></i>
			</div>
			{/* Search */}
			<div className='flex-1 flex items-center border-2 border-primary rounded-full px-3 py-1 mx-48'>
				<i className='fas fa-search'></i>
				<div className='w-skinny h-4 bg-primary ml-4 inline-flex'></div>
				<input
					type='text'
					className='w-full ml-4 placeholder-primary bg-transparent outline-none'
					placeholder='Search for a movie, tv show, person...'
				/>
			</div>
			{/* Display Image */}
			<Image src='/images/dp.png' alt='Display Image' width={40} height={40} className='flex rounded-full' />
		</div>
	)
}

export default SearchBar
