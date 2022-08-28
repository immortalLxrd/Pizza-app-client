import React from 'react'
import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useMutation, useApolloClient, gql} from '@apollo/client'

import Button from '../components/UI/Button/Button'
import Input from '../components/UI/Input/Input'

const SIGNIN_USER = gql`mutation SignIn($phoneNumber: String!, $password: String!) {
    signIn(phoneNumber: $phoneNumber, password: $password)
}
`

const IS_LOGGED_IN = gql`
    query {
        isLoggedIn @client
    }
`

const SignInRoute = (props) => {

	const [values, setValues] = useState()

	useEffect(() => {
		document.title = 'Sign In'
	})

	const navigate = useNavigate()

	const onChange = e => {
		setValues({
			...values,
			[e.target.name]: e.target.value
		})
	}

	const client = useApolloClient()

	const [signIn, {loading, error}] = useMutation(SIGNIN_USER, {
		onCompleted: data => {
			localStorage.setItem('token', data.signIn)
			client.writeQuery({query: IS_LOGGED_IN, data: {isLoggedId: true}})
			navigate('/')
		}
	})

	return (
		<div className='sign'>
			<div className="_container">
				<h2 className='title sign__title'>Sign In</h2>
				<form className='form sign__form'
				      onSubmit={e => {
					      e.preventDefault()
					      signIn({
						      variables: {
							      ...values
						      }
					      })
				      }}
				>
					<label htmlFor="phone">Phone number:</label>
					<Input
						id="phone"
						required
						// type="number"
						name="phoneNumber"
						placeholder="Phone"
						onChange={onChange}
					/>
					<label htmlFor="password">Password:</label>
					<Input
						id="password"
						required
						type="password"
						name="password"
						placeholder="Password"
						onChange={onChange}
					/>
					<Button className='form__btn' type='submit'>Sign In</Button>
				</form>
			</div>
		</div>
	)
}


export default SignInRoute