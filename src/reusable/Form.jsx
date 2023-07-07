import classNames from 'classnames'
import React from 'react'

const Form = ({children,className,...rest}) => {
  const classes = classNames(
    'relative rounded-md backdrop-opacity-40 bg-white/50 backdrop-blur shadow-xl',
    className
  )
  return (
    <div className={classes} {...rest}>
        {children}
    </div>
  )
}

export default Form;