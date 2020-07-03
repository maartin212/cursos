import { useRouter } from 'next/router';
import fetch from 'isomorphic-fetch';
import Container from '../../components/Container';

const User = ({ user }) => {
  return (
    <Container>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header text-center">
              <img
                src={user.avatar}
                alt={user.id}
                style={{ borderRadius: '50%' }}
              />
            </div>
            <div className="card-body text-center">
              <h3>
                {user.id}. {user.first_name} {user.last_name}
              </h3>
              <p>{user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

User.getInitialProps = async (ctx) => {
  const id = ctx.query.id;
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const resJson = await res.json();
  const user = resJson.data;
  return { user };
};

export default User;
