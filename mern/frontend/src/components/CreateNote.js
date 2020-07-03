import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CreateNote = () => {
  const [users, setUsers] = useState([]);
  const [note, setNote] = useState({
    title: '',
    content: '',
    author: '',
    date: new Date(),
  });
  const [isEditing, setIsEditing] = useState(false);
  const [id, setId] = useState('');

  const params = useParams();

  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get('http://localhost:4000/api/users');
      setUsers(res.data.map((user) => user.username));
      setNote((note) => ({ ...note, author: res.data[0].username }));
    };
    getUsers();
    if (params.id) {
      setIsEditing(true);
      setId(params.id);
      const getNote = async () => {
        const res = await axios.get(
          `http://localhost:4000/api/notes/${params.id}`
        );
        const { title, content, author, date } = res.data;
        setNote({ title, content, author, date: new Date(date) });
      };
      getNote();
    }
  }, [params.id]);

  const onInputChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const onChangeDate = (date) => {
    setNote({ ...note, date });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await axios.put(`http://localhost:4000/api/notes/${id}`, note);
    } else {
      await axios.post('http://localhost:4000/api/notes', note);
    }
    window.location.href = '/';
  };

  return (
    <div className="col-md-6 offset-md-3">
      <div className="card card-body">
        <h4>Create Note</h4>

        <div className="form-group">
          <select
            className="form-control"
            name="author"
            value={note.author}
            onChange={onInputChange}
          >
            {users.map((user, index) => (
              <option key={index} value={user}>
                {user}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="title"
            placeholder="Title"
            value={note.title}
            required
            onChange={onInputChange}
          />
        </div>

        <div className="form-group">
          <textarea
            className="form-control"
            name="content"
            placeholder="Content"
            value={note.content}
            required
            onChange={onInputChange}
          />
        </div>

        <div className="form-group">
          <DatePicker
            className="form-control"
            selected={note.date}
            onChange={onChangeDate}
          />
        </div>

        <form onSubmit={onSubmit}>
          <button type="submit" className="btn btn-primary">
            {isEditing ? 'Edit' : 'Save'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNote;
