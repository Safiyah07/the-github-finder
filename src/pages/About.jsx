import React from 'react'

function About() {
	return (
		<div>
			<div className='mt-4 text-xl'>
				<h1 className='text-6xl my-6'>Github Finder</h1>
				<p className='mb-4 text-2xl font-light'>
					A React app to search GitHub profiles and see profile details. This
					project is part of the{' '}
					<strong>
						<a href='https://www.udemy.com/course/modern-react-front-to-back/'>
							{' '}
							React Front To Back
						</a>
					</strong>{' '}
					Udemy course by
					<strong>
						<a href='https://traversymedia.com'> Brad Traversy</a>
					</strong>
					.
				</p>
				<p className='text-lg text-gray-400'>
					Version <span className='text-white'>1.0.0</span>
				</p>
				<p>
					Layout By :{' '}
					<a
						className='text-white'
						href='https://twitter.com/hassibmoddasser'
					>
						Hassib Moddasser
					</a>
				</p>
			</div>
		</div>
	)
}

export default About
