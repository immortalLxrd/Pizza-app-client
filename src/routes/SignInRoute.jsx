import React from 'react'
import { useEffect, useState } from 'react'
import { useMutation, useApolloClient, gql } from '@apollo/client'

import Button from '../components/UI/Button/Button'
import Input from '../components/UI/Input/Input'


const SignInRoute = () => {

    const [values, setValues] = useState()

    const onChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        document.title = 'Sign In'
    })

    return (
        <div className='sign'>
            <div className="_container">
                <h2 className='title sign__title'>Sign In</h2>
                <form className='form sign__form'>
                    <label htmlFor="phone">Phone number:</label>
                    <Input
                        id="phone"
                        required
                        type="number"
                        name="phone"
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