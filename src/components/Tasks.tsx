import React from "react";
import { TbTrash } from "react-icons/tb";

interface Task {
  id: number;
  title: string;
  summary: string;
}

const tasks: Task[] = [];

const Tasks = () => {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className="mt-4 rounded-lg p-2 shadow">
          <div className="flex justify-between">
            <h1 className="font-semibold">{task.title}</h1>
            <TbTrash color="red" size={18} />
          </div>
          <p className="text-lightGray">{task.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
