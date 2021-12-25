import PropTypes from 'prop-types';

export const IconPicker = ({ children, ...others }) => {
  return (
    <label className="inline-block grow mr-1">
      <input className="hidden" type="radio" name="iconPicker" {...others} />
      <span className="h-full grow rounded-lg bg-gray-100 hover:bg-orange-300 text-xl flex items-center justify-center cursor-pointer">
        {children}
      </span>
    </label>
  );
};

IconPicker.propTypes = {
  children: PropTypes.node.isRequired,
};
