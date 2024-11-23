import React, { useState } from 'react';


const Task = ({ task, updateTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState({ ...task });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditTask({ ...editTask, [name]: value });
  };

  const handleUpdate = () => {
    updateTask(editTask);
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteTask(task.id);
    }
  };

  return (
    <div className='bg-cont'>
      {isEditing ? (
        <div className='whole-cont'>
          <input
            type="text"
            name="title"
            value={editTask.title}
            onChange={handleEditChange}
          />
          <textarea
            name="description"
            value={editTask.description}
            onChange={handleEditChange}
          />
          <input
            type="date"
            name="dueDate"
            value={editTask.dueDate}
            onChange={handleEditChange}
          />
          <select
            name="status"
            value={editTask.status}
            onChange={handleEditChange}
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div className='task-container'>
          <h3>{task.title}</h3>
          <p className='description'>{task.description}</p>
          <p className='date'>{task.dueDate}</p>
          <p className='status'>{task.status}</p>
          <button onClick={() => setIsEditing(true)} className='edit'>Edit</button>
          <button onClick={handleDelete} className='delete'>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Task;
