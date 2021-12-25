import PropTypes from 'prop-types';

export const Button = ({ type, children, ...others }) => {
  return (
    <button
      type={type}
      {...others}
      className="mt-10 w-full bg-amber-500 hover:bg-amber-400 text-white font-bold py-2 px-4 border-b-4 border-amber-700 hover:border-amber-500 rounded"
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
};
