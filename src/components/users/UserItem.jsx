import { Link } from "react-router-dom"

function UserItem({ user: { login, avatar_url } }) {
	return (
		<div className='card card-side bg-base-100 shadow-lg'>
			<div className='flex items-center'>
				<div>
					<img
						src={avatar_url}
						className='rounded-full w-14 h-14'
						alt='Avatar_Url'
					/>
				</div>
				<div className='card-body'>
					<h2 className='card-title'>{login}</h2>
					<Link to={`/user/${login}`}>Visit Profile</Link>
				</div>
			</div>
		</div>
	)
}

export default UserItem
