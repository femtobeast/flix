import { motion } from 'framer-motion'

const Rating = ({ size, radius, rating, strokeWidth, animate }) => {
	const circumference = Math.ceil(2 * Math.PI * radius)
	const fillPercents = Math.abs(Math.ceil((circumference / 100) * (rating * 10 - 100)))

	const transition = {
		duration: 1,
		delay: 0.7,
		ease: 'easeInOut',
	}

	const variants = {
		initial: {
			strokeDashoffset: circumference,
			transition,
		},
		animate: {
			strokeDashoffset: fillPercents,
			transition,
		},
	}

	return (
		<div className='' title='Rating'>
			<svg viewBox='0 0 100 100' version='1.1' xmlns='http://www.w3.org/2000/svg' width={size} height={size}>
				<circle cx='50' cy='50' r={radius} strokeWidth='1' stroke={animate ? '#707C8C' : ''} fill='#272E37' />
				<text x='50%' y='50%' textAnchor='middle' stroke='#DB2777' dy='.3em' fontSize='2em'>
					{rating > 0 ? rating : 'NR'}
				</text>
			</svg>
			<svg viewBox='0 0 100 100' width={size} height={size} className='outer__circle'>
				{animate ? (
					<motion.circle
						cx='50'
						cy='50'
						r={radius}
						strokeWidth={strokeWidth}
						stroke='#DB2777'
						fill='transparent'
						strokeDashoffset={fillPercents}
						strokeDasharray={circumference}
						initial='initial'
						animate='animate'
						variants={variants}
					/>
				) : (
					<circle
						cx='50'
						cy='50'
						r={radius}
						strokeWidth={strokeWidth}
						stroke='#DB2777'
						fill='transparent'
						strokeDashoffset={fillPercents}
						strokeDasharray={circumference}
					/>
				)}
			</svg>

			{/* Css in Js */}
			<style jsx>{`
				.outer__circle {
					transform: rotate(-90deg);
					overflow: visible;
					margin-top: ${-size}px;
				}
			`}</style>
		</div>
	)
}

export default Rating
