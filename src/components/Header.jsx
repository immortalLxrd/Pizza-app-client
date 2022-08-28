import React from 'react'
import {Link} from 'react-router-dom'
import {gql, useQuery} from "@apollo/client"

const IS_LOGGED_IN = gql`
    query {
        isLoggedIn @client
    }
`

const Header = () => {
	const {data, client} = useQuery(IS_LOGGED_IN)

	console.log(data)

	function logOut(e) {
		localStorage.removeItem('token', data.signIn)
		client.writeQuery({query: IS_LOGGED_IN, data: {isLoggedIn: false}})
	}

	return (
		<header className='header'>
			<div className="_container header__inner">
				<h1 className="title header__logo">
					pizza!
				</h1>
				<ul className='nav header__nav'>
					<li className='nav__item'>
						<Link to="/">Pizza!</Link>
					</li>
					{
						data.isLoggedIn ? (
							<a
								onClick={() => logOut()}
							>
								Log Out
							</a>
						) : (<>
							<li className='nav__item'>
								<Link to="/signin">Sign In</Link>
							</li>
							<li className='nav__item'>
								<Link to="/signup">Sign Up</Link>
							</li>
						</>)
					}
				</ul>
			</div>
		</header>
	)
}

export default Header