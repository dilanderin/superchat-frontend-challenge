export const TextField = ({ children, label, error, id, ...others }) => {
  return (
    <>
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>

      <input
        className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
          error ? 'border-red-500' : null
        } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
        id={id}
        type="text"
        {...others}
      />

      {error ? <p className="text-red-500 text-xs italic">{error}</p> : null}
    </>
  );
};
