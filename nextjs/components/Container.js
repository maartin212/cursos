import Head from 'next/head';
import Navitagion from './Navigation';

const Container = ({ children }) => {
  return (
    <>
      <Head>
        <title>NextJS</title>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/flatly/bootstrap.min.css"
        />
      </Head>
      <Navitagion />
      <div className="container p-4">{children}</div>
    </>
  );
};

export default Container;
