import React from 'react';
import { ITask } from './Task';

const TaskList = ({
  tasks,
  deleteTask,
}: ITaskListProps): React.ReactElement => {
  return (
    <>
      {tasks.map((task: ITask, index: number) => (
        <div key={index} className="col-md-4 mt-2">
          <div className="card card-body">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button
              className="btn btn-danger btn-block"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

interface ITaskListProps {
  tasks: ITask[];
  deleteTask: (id: number) => void;
}

export default TaskList;
