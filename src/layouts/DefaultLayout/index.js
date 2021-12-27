import Head from 'next/head';
import { Header } from '../../components/Header';
import { useRouter } from 'next/router';

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
      {!useRouter().pathname.includes('repo') ? <Header /> : null}

      <main className="bg-white mt-10 rounded-lg p-10 shadow-2xl shadow-red-900 lg:max-w-[50%] relative">
        {children}
      </main>
    </div>
  </>
);

export default DefaultLayout;
