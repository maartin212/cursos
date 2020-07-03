import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CreateUser = () => {
  const [users, serUsers] = useState([]);
  const [userName, setUserName] = useState('');

  const getUsers = async () => {
    const res = await axios.get('http://localhost:4000/api/users');
    serUsers(res.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const onChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:4000/api/users', {
      username: userName,
    });
    getUsers();
    setUserName('');
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:4000/api/users/${id}`);
    getUsers();
  };

  return (
    <div className="row">
      <div className="col-md-4">
        <div className="card card-body">
          <h3>Create New User</h3>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="text"
                value={userName}
                className="form-control"
                onChange={(e) => onChangeUserName(e)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </form>
        </div>
      </div>
      <div className="col-md-8">
        <ul className="list-group">
          {users.map((user) => (
            <li
              key={user._id}
              className="list-group-item list-group-item-action"
              onDoubleClick={() => deleteUser(user._id)}
            >
              {user.username}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CreateUser;
