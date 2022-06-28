import React from 'react'
import cl from './Button.module.scss'

const Button = ({ children, className, ...props }) => {

    const rootClasses = [cl.btn]

    if (className)
        rootClasses.push(className)

    return (
        <button className={rootClasses.join(' ')} {...props}>
            {children}
        </button>
    )
}

export default Button