import PropTypes from 'prop-types';

export const Button = ({ type, children, small, ...others }) => {
  return (
    <button
      type={type}
      {...others}
      className={`mt-10 ${
        small ? null : 'w-full'
      } bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-4 rounded`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
};
