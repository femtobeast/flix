import Head from 'next/head'
import Sidebar from './Sidebar'
import SearchBar from './SearchBar'
import { motion } from 'framer-motion'

const Layout = ({ title, children }) => {
	return (
		<>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<title> {title} | Flixx </title>
				<meta name='description' content='Learning Next.Js and Tailwind CSS using TMDB API' />
			</Head>

			<main>
				<div className='flex h-screen overflow-y-hidden'>
					<Sidebar />
					<div className='flex-1 bg-content flex flex-col overflow-x-hidden'>
						<SearchBar />
						<motion.div
							exit={{ opacity: 0 }}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1 }}
							className='flex-1 overflow-y-auto main__content w-full pt-24'
						>
							{children}
						</motion.div>
					</div>
				</div>
			</main>
		</>
	)
}

export default Layout
