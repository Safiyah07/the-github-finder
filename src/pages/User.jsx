import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa'
import { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Spinner from './../components/layout/Spinner'
import UserRepos from '../components/repos/UserRepos'
import GithubContext from '../context/github/GithubContext'
import { getUserAndRepos } from '../context/github/GithubActions'

function User() {
	const { user, loading, repos, dispatch } = useContext(GithubContext)

	const params = new useParams()

	useEffect(() => {
		dispatch({ type: 'SET_LOADING' })
		const getUserData = async () => {
			const userData = await getUserAndRepos(params.login)
			dispatch({ type: 'GET_USER_AND_REPOS', payload: userData })
		}

		getUserData()
	}, [dispatch, params.login])

	const {
		name,
		type,
		avatar_url,
		location,
		bio,
		blog,
		twitter_username,
		login,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
		hireable,
	} = user

	if (loading) {
		return <Spinner />
	}

	return (
		<>
			<div className='w-full mx-auto lg:w-10/12'>
				<div className='mb-4'>
					<Link
						to='/'
						className='btn btn-ghost'
					>
						Back To Search
					</Link>
				</div>
				<div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
					<div className='custom-card-image mb-6 md:mb-0'>
						<div className='card rounded-lg shadow-xl image-full'>
							<figure>
								<img
									src={avatar_url}
									alt='Avatar'
								/>
							</figure>
							<div className='card-body sm:mt-4 hidden xl:block lg:block md:block'>
								<div className='card-actions flex-col'>
									<h2 className='card-title'>{name}</h2>
									<p>{login}</p>
								</div>
							</div>
						</div>
					</div>
					<div className='flex flex-col col-span-2 mr-2 mt-6'>
						<div className='flex flex-row'>
							<div className='mr-2 font-semibold text-3xl'>{name}</div>
							<div className='mt-2'>
								<div className='badge badge-success mr-2'>{type}</div>
								{hireable && <div className='badge badge-info'>Hireable</div>}
							</div>
						</div>
						<div>
							<div className='mb-4'>{bio}</div>
							<a
								href={html_url}
								target='_blank'
								rel='noreferrer'
								className='btn btn-outline'
							>
								VISIT GITHUB PROFILE
							</a>
						</div>
						<div className='stats stats-vertical lg:stats-horizontal shadow mt-4'>
							{location && (
								<div className='stat'>
									<div className='stat-title'>Location</div>
									<div className='text-base-800 font-bold text-xl'>
										{location}
									</div>
								</div>
							)}

							{blog && (
								<div className='stat'>
									<div className='stat-title'>Website</div>
									<div className='text-base-800 font-bold text-xl'>{blog}</div>
								</div>
							)}

							{twitter_username && (
								<div className='stat'>
									<div className='stat-title'>Twitter</div>
									<div className='text-base-800 font-bold text-xl'>
										{twitter_username}
									</div>
								</div>
							)}
						</div>
					</div>
				</div>

				<div className='stats shadow w-full'>
					<div className='stat'>
						<div className='stat-figure text-secondary'>
							<FaUsers className='inline-block w-8 h-8 stroke-current' />
						</div>
						<div className='stat-title mb-4'>Followers</div>
						<div className='stat-value'>{followers}</div>
					</div>

					<div className='stat'>
						<div className='stat-figure text-secondary'>
							<FaUserFriends className='inline-block w-8 h-8 stroke-current' />
						</div>
						<div className='stat-title mb-4'>Following</div>
						<div className='stat-value'>{following}</div>
					</div>

					<div className='stat'>
						<div className='stat-figure text-secondary'>
							<FaCodepen className='inline-block w-8 h-8 stroke-current' />
						</div>
						<div className='stat-title mb-4'>Public Repos</div>
						<div className='stat-value'>{public_repos}</div>
					</div>

					<div className='stat'>
						<div className='stat-figure text-secondary'>
							<FaStore className='inline-block w-8 h-8 stroke-current' />
						</div>
						<div className='stat-title mb-4'>Public Gists</div>
						<div className='stat-value'>{public_gists}</div>
					</div>
				</div>

				<UserRepos repos={repos} />
			</div>
		</>
	)
}

export default User
