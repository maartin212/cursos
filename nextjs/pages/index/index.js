import Container from '../../components/Container';
import Head from 'next/head';
import fetch from 'isomorphic-fetch';
import Users from './components/Users';

const Index = ({ users }) => {
  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Next</h1>
      <Users users={users} />
    </Container>
  );
};

Index.getInitialProps = async (ctx) => {
  const res = await fetch('https://reqres.in/api/users');
  const resJSON = await res.json();
  const users = resJSON.data;
  return { users };
};

export default Index;
