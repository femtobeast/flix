import { useEffect, useState } from 'react'
import PersonCard from '../../components/PersonCard'
import Title from '../../components/Title'
import { fetcher } from '../../lib/Fetcher'
import { POPULAR_PEOPLE } from '../../lib/Requests'
import LoadMore from '../../components/LoadMore'
import { motion } from 'framer-motion'
import { fadeIn, stagger } from '../../lib/anim'

const PopularPeople = ({ data }) => {
  const [popularPeople, setPopularPeople] = useState([])

  useEffect(() => {
    setPopularPeople(prev => [...prev, ...data?.results])
  }, [data])

  return (
    <div className='px-12'>
      <Title title='Popular People' customClass='text-light' />
      {!popularPeople.length > 0 ? (
        <p className='text-3xl text-primary'>Loading</p>
      ) : (
        <motion.div variants={fadeIn} initial='initial' animate='animate' className='grid grid-cols-5 gap-1 mt-6'>
          {popularPeople?.map((person, index) => (
            <motion.div variants={stagger} key={index}>
              <PersonCard id={person.id} image={person.profile_path} name={person.name} knownFor={person.known_for} width='250px' />
            </motion.div>
          ))}
        </motion.div>
      )}
      {/* load more button */}
      <LoadMore page={data?.page} />
    </div>
  )
}

export const getServerSideProps = async ({ query }) => {
  const page = query.page || 1

  const data = await fetcher(`${POPULAR_PEOPLE}?page=${page}`)

  return {
    props: {
      title: 'Popular People',
      data,
    },
  }
}

export default PopularPeople
