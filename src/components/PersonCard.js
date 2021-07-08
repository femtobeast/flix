import { BASE_URL } from '../lib/Requests'
import Image from 'next/image'

const PersonCard = ({ id, image, name, character, knownFor, width }) => {
  return (
    <div className='mt-3 mr-5' title={name} onClick={() => alert(id)} style={{ width: width }}>
      <div className='relative rounded-md shadow-md hover:shadow-2xl cursor-pointer transform duration-300 hover:scale-105 overflow-y-auto'>
        {/* <img src={image ? `${BASE_URL}/${image}` : '/images/person.svg'} alt={name} className='rounded-md object-contain' /> */}
        <Image src={image ? `${BASE_URL}/${image}` : '/images/person.svg'} alt={name} width={400} height={500} layout='responsive' className='rounded-md' />
        {knownFor && (
          <div className='absolute top-0 w-full h-full rounded-md bg-gradient-to-tr from-secondary to-pink-500 duration-500 opacity-0 hover:opacity-80 flex flex-col items-center justify-center text-white'>
            <span className='font-extrabold text-xl mb-3'>Known For</span>
            {knownFor?.map((media, index) => (
              <span className='text-sm text-center px-5' key={index}>
                {media.title || media.original_title || media.name || media.original_name}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className='details mt-3 mx-2'>
        <p className='font-bold text-light'>{name}</p>
        {character && <p className='text-primary font-medium text-sm'>({character})</p>}
      </div>
    </div>
  )
}

export default PersonCard
