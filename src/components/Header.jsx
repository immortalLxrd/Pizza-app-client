import {useContext, useMemo} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {AuthContext} from "../context/authContext";


const Header = () => {
	const navigate = useNavigate();
	const {user, logout} = useContext(AuthContext);

	const userMemo = useMemo(() => user, [user]);

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
						userMemo ? (<>
							<li className='nav__item'>
								<Link to={'/pizza/new'}>
									New Item
								</Link><
							/li>
							<li
								className='nav__item'
								onClick={onLogout}
							>
								Log Out
							</li>
						</>) : (<>
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