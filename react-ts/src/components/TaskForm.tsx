import React, { useState } from 'react';
import { ITask } from './Task';

const getCurrentTimestamp = (): number => {
  return new Date().getTime();
};

const TaskForm = ({ addNewTask }: ITaskFormProps): React.ReactElement => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleNewTask = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newTask: ITask = {
      id: getCurrentTimestamp(),
      title,
      description,
      completed: false,
    };
    addNewTask(newTask);
    setTitle('');
    setDescription('');
  };

  const handleTitleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };

  const handleDescriptionInput = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    setDescription(e.target.value);
  };

  return (
    <div className="card card-body">
      <form onSubmit={(e) => handleNewTask(e)}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Task Title"
            value={title}
            onChange={handleTitleInput}
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Task Description"
            value={description}
            onChange={handleDescriptionInput}
          />
        </div>
        <button className="btn btn-primary btn-block">Save</button>
      </form>
    </div>
  );
};

interface ITaskFormProps {
  addNewTask: (task: ITask) => void;
}

export default TaskForm;
