import { useState, useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'
import GithubContext from '../../context/github/GithubContext'
import { searchUsers } from '../../context/github/GithubActions'

function UserSearch() {
	const [text, setText] = useState('')

	const { users, dispatch } = useContext(GithubContext)
	const { setAlert } = useContext(AlertContext)

	const handleChange = (e) => {
		setText(e.target.value)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		if (text === '') {
			setAlert('Please Enter Something', 'error')
		} else {
			dispatch({ type: 'SET_LOADING' })
			const users = await searchUsers(text)
			dispatch({ type: 'GET_USERS', payload: users })
			setText('')
		}
	}

	return (
		<div className='form-control grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-8'>
			<form onSubmit={handleSubmit}>
				<div className='input-group'>
					<input
						type='text'
						placeholder='Search'
						className='w-full h-16 input input-bordered bg-accent-content text-black'
						value={text}
						onChange={handleChange}
					/>
					<button
						type='submit'
						className='btn btn-square w-36 h-16'
					>
						Go
					</button>
				</div>
			</form>
			{users.length > 0 && (
				<div>
					<button
						onClick={() => dispatch({type: 'CLEAR_USERS'})}
						className='btn btn-ghost h-16'
					>
						Clear
					</button>
				</div>
			)}
		</div>
	)
}

export default UserSearch
