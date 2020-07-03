import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { ITask } from './Task';

const App = ({ title }: IProps): React.ReactElement => {
  const [tasks, setTasks] = useState<ITasksList>([]);

  const addNewTaks = (task: ITask): void => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id: number): void => {
    const newTasksList: ITask[] = tasks.filter((task: ITask) => task.id !== id);
    setTasks(newTasksList);
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a href="/" className="navbar-brand">
          {title}
        </a>
      </nav>
      <div className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm addNewTask={addNewTaks} />
          </div>
          <div className="col-md-8">
            <TaskList tasks={tasks} deleteTask={deleteTask} />
          </div>
        </div>
      </div>
    </div>
  );
};

interface IProps {
  title: string;
}

type ITasksList = ITask[];

export default App;
