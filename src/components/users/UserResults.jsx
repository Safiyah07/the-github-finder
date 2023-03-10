import { useContext } from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import GithubContext from '../../context/github/GithubContext'

function UserResults() {
	const { users, loading } = useContext(GithubContext)

	if (!loading) {
		return (
			<div className='grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-8'>
				{users.map((user) => {
					return (
						<UserItem
							key={user.id}
							user={user}
						/>
					)
				})}
			</div>
		)
	} else {
		return <Spinner />
	}
}

export default UserResults
