import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

const CREATE_MESSAGE = gql`
  mutation CreateMessage($title: String!, $content: String!, $author: String!) {
    createMessage(title: $title, content: $content, author: $author) {
      _id
    }
  }
`;

const MessageForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const [createMessage] = useMutation(CREATE_MESSAGE);

  const inputTitle = (e) => {
    setTitle(e.target.value);
  };

  const inputContent = (e) => {
    setContent(e.target.value);
  };

  const inputAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await createMessage({ variables: { title, content, author } });
    window.location.href = '/';
  };

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-body">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Author"
                  value={author}
                  className="form-control"
                  onChange={inputAuthor}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Title"
                  value={title}
                  className="form-control"
                  onChange={inputTitle}
                />
              </div>
              <div className="form-group">
                <textarea
                  rows="2"
                  placeholder="Content..."
                  value={content}
                  className="form-control"
                  onChange={inputContent}
                />
              </div>
              <button className="btn btn-success btn-block">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageForm;
