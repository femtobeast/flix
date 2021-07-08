import { BASE_URL } from '../../lib/Requests'

const Poster = ({ path, title }) => {
  return (
    <div className='w-1/5 mr-8' title={title}>
      <img src={`${BASE_URL}/${path}`} className='rounded-lg shadow-2xl' alt={title} />
    </div>
  )
}

export default Poster
