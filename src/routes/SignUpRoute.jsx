import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation, useApolloClient, gql } from '@apollo/client'

import Button from '../components/UI/Button/Button'
import Input from '../components/UI/Input/Input'

const SIGNUP_USER = gql`
    mutation SignUp($phoneNumber: String!, $password: String!, $email: String) {
        signUp(phoneNumber: $phoneNumber, password: $password, email: $email)
  }`

const SignUpRoute = (props) => {

    const [values, setValues] = useState()

    useEffect(() => {
        document.title = 'Sign Up'
    })

    const navigate = useNavigate()

    const onChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
        onCompleted: data => {
            localStorage.setItem('token', data.signUn)
            navigate('/')
        }
    })

    return (
        <div className='sign'>
            <div className="_container">
                <h2 className='title sign__title'>Sign Up</h2>
                <form className='form sign__form'
                    onSubmit={e => {
                        e.preventDefault()
                        signUp({
                            variables: {
                                ...values
                            }
                        })
                    }}
                >
                    <label htmlFor="phoneNumber">Phone number:</label>
                    <Input
                        id="phone"
                        required
                        type="number"
                        name="phoneNumber"
                        placeholder="Phone"
                        onChange={onChange}
                    />
                    <label htmlFor="email">Email:</label>
                    <Input
                        id="email"
                        required
                        type="email"
                        name="email"
                        placeholder="Email"
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
                    <Button className='form__btn' type='submit'>Sign Up</Button>
                </form>
            </div>
        </div>
    )
}


export default SignUpRoute