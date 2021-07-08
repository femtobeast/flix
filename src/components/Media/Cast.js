import { motion } from 'framer-motion'
import { fadeIn, stagger } from '../../lib/anim'
import PersonCard from '../PersonCard'

const Cast = ({ cast }) => {
  return (
    <motion.div
      className='px-12 mt-4 grid grid-rows-1 grid-flow-col gap-1 overflow-x-auto overflow-y-hidden scrollbar__none'
      variants={fadeIn}
      initial='initial'
      animate='animate'
    >
      {cast?.map((cast, index) => (
        <motion.div variants={stagger} key={index}>
          <PersonCard id={cast.id} name={cast.name} image={cast.profile_path} character={cast.character} width='130px' />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default Cast
