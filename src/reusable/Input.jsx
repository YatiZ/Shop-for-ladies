import classNames from "classnames";

export default function Input({className,...rest}){
    const classes = classNames(
        'backdrop-opacity-10 bg-white/40 backdrop-blur rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 md:p-2 tracking-wider shadow-md'
    )
    return(
        <input className={classes} {...rest}/>
    )
}