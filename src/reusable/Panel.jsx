import classNames from "classnames";

function Panel({children, className, ...rest}){
    const classes = classNames(
       'relative rounded-md backdrop-opacity-10 bg-white/30 backdrop-blur shadow-xl',
       className
    )
    return (
        <div className={classes} {...rest}>
            {children}
        </div> 
    )
}

export default Panel;