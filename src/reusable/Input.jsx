import classNames from "classnames";

export default function Input({className,...rest}){
    const classes = classNames(
        'border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 md:p-2'
    )
    return(
        <input className={classes} {...rest}/>
    )
}