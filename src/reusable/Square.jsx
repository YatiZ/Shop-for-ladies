import classNames from 'classnames';
import React from 'react';

const Square = ({className,children,...rest}) => {
  const classes = classNames(
    'absolute bg-pink-400 rounded-full animate-bounce',
    className
  )
  return (
    <div className={classes} {...rest}>
        {children}
    </div>
  )
}

export default Square