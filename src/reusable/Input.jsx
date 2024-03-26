import classNames from "classnames";

export default function Input({ className, ...rest }) {
  const classes = classNames(
    "backdrop-opacity-10 bg-white/40 backdrop-blur rounded-lg focus:outline-pink-500 block w-full p-1 md:p-2 lg:p-2 p-3 tracking-wider shadow-md"
  );
  return <input className={classes} {...rest} />;
}
