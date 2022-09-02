import React from 'react'
import cl from './Select.module.scss'

const Select = ({className, ...props}) => {

	const rootClasses = [cl.select]

	if (className) {
		rootClasses.push(className)
	}

	return (
		<select className={rootClasses.join(' ')} {...props} />
	)
}

export default Select