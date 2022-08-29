import {useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {AuthContext} from "../context/authContext";


const Header = () => {
	const navigate = useNavigate();
	const {user, logout} = useContext(AuthContext);

	function onLogout() {
		logout();
		navigate('/');
	}

	return (
		<header className='header'>
			<div className="_container header__inner">
				<h1 className="title header__logo">
					pizza!
				</h1>
				<ul className='nav header__nav'>
					<li className='nav__item'>
						<Link to="/">Catalog</Link>
					</li>
					{
						user ? (
							<a
								onClick={onLogout}
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
};

export default Header;