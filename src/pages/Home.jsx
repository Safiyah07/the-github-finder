import React from 'react'
import Alert from '../components/layout/Alert'
import UserResults from '../components/users/UserResults'
import UserSearch from './../components/users/UserSearch'
import { AlertProvider } from '../context/alert/AlertContext'

function Home() {
	return (
		<>
			<AlertProvider>
				<Alert />
				<UserSearch />
				<UserResults />
			</AlertProvider>
		</>
	)
}

export default Home
