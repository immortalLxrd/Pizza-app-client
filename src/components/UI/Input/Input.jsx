import React from 'react'
import cl from './Input.module.scss'

const Input = ({className, ...props}) => {

    const rootClasses = [cl.input]

    if (className) {
        rootClasses.push(className)
    }

    return (
        <input className={rootClasses.join(' ')} {...props} />
    )
}

export default Input