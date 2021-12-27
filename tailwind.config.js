module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    // Add extra paths here
  ],
  theme: {
    theme: {
      minWidth: {
        '1/2': '50%',
      },
      maxWidth: {
        '1/2': '50%',
      },
      extend: {
        fontFamily: { sans: ['Mulish'] },
      },
    },
  },
  plugins: [],
};
