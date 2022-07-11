import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
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
                    <li className='nav__item'>
                        <Link to="/signin">Sign In</Link>
                    </li>
                    <li className='nav__item'>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header