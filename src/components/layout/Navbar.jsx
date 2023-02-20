import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Navbar() {
	return (
		<>
			<div className='navbar bg-neutral text-neutral-content'>
				<div className='container px-3 mx-auto'>
					<div className='flex items-center font-bold flex-1'>
						<Link
							to='/'
							className='text-xl'
						>
							<FaGithub />
						</Link>
						<div className='flex-1'>
							<Link
								to='/'
								className='pl-2 text-xl'
							>
								Github Finder
							</Link>
						</div>
					</div>

					<div className='flex-none'>
						<Link
							to='/'
							className='btn btn-ghost btn-sm'
						>
							Home
						</Link>

						<Link
							to='/about'
							className='btn btn-ghost btn-sm'
						>
							About
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default Navbar
