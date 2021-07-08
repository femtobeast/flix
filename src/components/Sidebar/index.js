import styles from './sidebar.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Sidebar = () => {
	const router = useRouter()

	const menus = [
		{
			title: 'Discover',
			icon: 'fas fa-compass',
			url: '/',
		},
		{
			title: 'Movies',
			alias: 'movies',
			icon: 'fas fa-film',
			url: '/movies/popular',
			submenu: [
				{ title: 'Popular', url: '/movies/popular' },
				{ title: 'Now Playing', url: '/movies/now-playing' },
				{ title: 'Upcoming', url: '/movies/upcoming' },
				{ title: 'Top Rated', url: '/movies/top-rated' },
			],
		},
		{
			title: 'TV Shows',
			alias: 'tv',
			icon: 'fas fa-tv fa-xs',
			url: '/tv/popular',
			submenu: [
				{ title: 'Popular', url: '/tv/popular' },
				{ title: 'Airing Today', url: '/tv/airing-today' },
				{ title: 'On TV', url: '/tv/on-tv' },
				{ title: 'Top Rated', url: '/tv/top-rated' },
			],
		},
		{
			title: 'People',
			alias: 'people',
			icon: 'fas fa-users fa-xs',
			url: '/people/popular',
			submenu: [{ title: 'Popular People', url: '/people/popular' }],
		},
	]

	return (
		<div className='w-1/6 bg-sidebar flex flex-col'>
			{/* Brand name */}
			<Link href='/'>
				<a className='font-bold text-4xl text-light py-5 text-center'>FLIXX</a>
			</Link>
			<div className='flex-1 text-primary overflow-y-hidden flex flex-col justify-between'>
				{/* Menus */}
				<div className='overflow-y-auto scrollbar__none'>
					<ul>
						{menus.map((menu, index) => (
							<li className={`mt-6 border-l-4 ${menu.active ? 'border-secondary' : 'border-transparent'}`} key={index}>
								<Link href={menu.url}>
									<a className='group flex items-center mx-8 font-bold'>
										<i
											className={`${menu.icon} ${router?.pathname === menu.url || (router?.pathname.includes(menu.alias) && 'text-secondary')}
											 group-hover:text-secondary`}
										></i>
										<span
											className={`ml-2 ${
												router?.pathname === menu.url || router?.pathname.includes(menu.alias) ? 'text-secondary' : 'text-primary'
											} tracking-wider group-hover:text-secondary`}
										>
											{menu.title}
										</span>
									</a>
								</Link>
								{menu.submenu && (
									<ul className='mx-8 mt-3'>
										{menu.submenu.map((submenu, index) => (
											<li className='mt-1 transform duration-200 hover:translate-x-1' key={index}>
												<Link href={submenu.url}>
													<a className={`mx-6 hover:text-light ${router?.pathname === submenu.url && 'text-light'}`}>{submenu.title}</a>
												</Link>
											</li>
										))}
									</ul>
								)}
							</li>
						))}
					</ul>
				</div>
				{/* TMDB button */}
				<a
					href='https://www.themoviedb.org/'
					target='_blank'
					className={`border-2 w-36 my-5 p-2 text-center self-center transform duration-500 hover:scale-105 ${styles.btn__tmdb}`}
				>
					<span className={`${styles.tmdb}`}>TMDB</span>
				</a>
			</div>
		</div>
	)
}

export default Sidebar
