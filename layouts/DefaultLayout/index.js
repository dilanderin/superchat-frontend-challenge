import Head from 'next/head';
import PropTypes from 'prop-types';
import { Header } from '../../components/Header';

const DefaultLayout = ({ children }) => (
  <>
    <Head>
      <title>Share repository</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css?family=Mulish:200,300,regular,500,600,700,800,900"
        rel="stylesheet"
      />
    </Head>

    <div className="flex flex-col items-center justify-center w-full h-auto mt-10">
      <Header />

      {children}
    </div>
  </>
);

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
