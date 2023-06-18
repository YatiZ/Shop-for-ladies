import className from 'classnames';
import {AiOutlineSync} from 'react-icons/ai';

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  loading,
  ...rest
}) {
  const classes = className(
    rest.className,
    'flex items-center px-3 py-1.5 border',
    {
      
      
    }
  );

  return (
    <button {...rest} className={classes} disabled={loading}>
      {loading? <AiOutlineSync className='animate-spin'/>: children}
   
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        'Only one of primary, secondary, success, warning, danger can be true'
      );
    }
  },
};

export default Button;