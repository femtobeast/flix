import Genre from '../Genre'

const Genres = ({ genres }) => {
  return (
    <div title='Genres'>
      {genres?.map((genre, index) => (
        <Genre name={genre.name} key={index} />
      ))}
    </div>
  )
}

export default Genres
