import Title from '../Title'

const TitleAndTag = ({ title, tagline }) => {
	return (
		<>
			<Title title={title} customClass='text-light' />
			<p className='text-primary italic'>{tagline}</p>
		</>
	)
}

export default TitleAndTag
