import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa'
import { PropTypes } from 'prop-types'

function RepoItem({ repo }) {
	const {
		name,
		description,
		html_url,
		forks,
		open_issues,
		watchers_count,
		stargazers_count,
	} = repo
	return (
		<div className='card w-full bg-gray-800 hover:bg-gray-900 my-6 rounded'>
			<div className='card-body'>
        <div className="mb-4">
        <h2 className='card-title mb-2'>
					<FaLink />
          <a href={html_url}>{name}</a>
				</h2>
        <p>{description}</p>
        </div>

				<div className='flex gap-2'>
					<div className='badge badge-info gap-2'>
						<FaEye />
						{watchers_count}
					</div>
					<div className='badge badge-success gap-2'>
						<FaStar />
						{stargazers_count}
					</div>
					<div className='badge badge-error gap-2'>
						<FaInfo />
						{open_issues}
					</div>
					<div className='badge badge-warning gap-2'>
						<FaUtensils />
						{forks}
					</div>
				</div>
			</div>
		</div>
	)
}

RepoItem.propTypes = {
	repos: PropTypes.object,
}

export default RepoItem
