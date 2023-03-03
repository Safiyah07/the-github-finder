import React from 'react'
import RepoItem from './RepoItem'
import { PropTypes } from 'prop-types';

function UserRepos({ repos }) {
	return (
		<div>
			<h2 className='text-base-800 font-bold text-3xl mt-6'>Latest Repos</h2>
			{repos.map((repo) => {
				return (
					<RepoItem
						key={repo.id}
						repo={repo}
					/>
				)
			})}
		</div>
	)
}

UserRepos.propTypes = {
  repos: PropTypes.array.isRequired,
}

export default UserRepos
