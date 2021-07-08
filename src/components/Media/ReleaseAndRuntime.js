import moment from 'moment'
import Divider from '../Divider'

const ReleaseAndRuntime = ({ media }) => {
  return (
    <>
      <div className='flex items-center ml-3' title='Release Date'>
        <i className='fas fa-clock mr-2 text-primary'></i>
        <span>
          {moment(media?.release_date).format('MMM DD, YYYY')} ({media?.production_countries?.[0]?.iso_3166_1})
        </span>
      </div>
      <Divider customClass='h-6 ml-4' />
      <div className='flex items-center ml-3' title='Runtime'>
        <i className='fas fa-play mr-2 text-primary'></i>
        <span className='tracking-wider'>{media?.runtime} mins</span>
      </div>
    </>
  )
}

export default ReleaseAndRuntime
