import PropTypes from 'prop-types';

export const IconPicker = ({ children, active, ...others }) => {
  return (
    <label className="inline-block grow mr-1">
      <input className="hidden" type="radio" name="iconPicker" {...others} />
      <span
        className={`${
          active ? 'bg-[#a52a2a]' : 'bg-gray-100'
        } h-full grow rounded-lg hover:bg-[#a52a2a] text-xl flex items-center justify-center cursor-pointer`}
      >
        {children}
      </span>
    </label>
  );
};

IconPicker.propTypes = {
  children: PropTypes.node.isRequired,
};
