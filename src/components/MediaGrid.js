import { motion } from 'framer-motion'
import { fadeIn, stagger } from '../lib/anim'
import MediaCard from './MediaCard'

const MediaGrid = ({ media, type }) => {
	return (
		<motion.div variants={fadeIn} initial='initial' animate='animate' className='grid grid-cols-5 gap-8 mt-6'>
			{media?.map((media, index) => (
				<motion.div variants={stagger} key={index}>
					<MediaCard
						id={media.id}
						type={type}
						image={media.poster_path}
						title={media.title || media.original_title || media.name || media.original_name}
						date={media.release_date || media.first_air_date}
						rating={media.vote_average}
					/>
				</motion.div>
			))}
		</motion.div>
	)
}

export default MediaGrid
