import { AnimatePresence, motion } from 'framer-motion'
import ReactPlayer from 'react-player/lazy'

const backdrop = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
}

const modal = {
	hidden: { opacity: 0, scale: 0.7 },
	visible: { opacity: 1, scale: 1, transition: { delay: 0.5 } },
}

const VideoPlayerModal = ({ trailerKey, playingTrailer, setPlayingTrailer }) => {
	return (
		<AnimatePresence>
			{playingTrailer && (
				<motion.div
					className='fixed bg-black top-0 left-0 w-screen h-screen z-10 bg-opacity-70 flex justify-center items-center'
					initial='hidden'
					animate='visible'
					exit='hidden'
					variants={backdrop}
				>
					<motion.div className='relative w-3/5 h-3/4 rounded-lg shadow-2xl bg-content' variants={modal}>
						<span className='absolute top-1 right-2 cursor-pointer' onClick={() => setPlayingTrailer(false)}>
							<i className='fas fa-times text-secondary opacity-70 hover:opacity-100'></i>
						</span>
						<ReactPlayer url={`https://www.youtube.com/watch?v=${trailerKey}`} width='100%' height='100%' playing={true} controls={true} />
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default VideoPlayerModal
