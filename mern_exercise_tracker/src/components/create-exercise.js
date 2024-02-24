import React, { useState, useRef } from 'react';

const CreateExercises = () => {
  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState(['test user']);
  const selectRef = useRef(null);

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const onChangeDuration = (e) => {
    setDuration(e.target.value);
  };

  const onChangeDate = (e) => {
    setDate(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const exercise = {
      username,
      description,
      duration,
      date
    };
    console.log(exercise);
  };

  return (
    <div>
      <h3>Create New Exercise</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label>Username:</label>
          <input 
            type="text" 
            className="form-control" 
            value={username} 
            onChange={onChangeUsername} 
            list="userSuggestions" 
            autoComplete="off" 
            required 
          />
          <datalist id="userSuggestions">
            {users.map((user, index) => (
              <option key={index} value={user} />
            ))}
          </datalist>
        </div>
        <div>
          <label>Description:</label>
          <input type="text" required className="form-control" value={description} onChange={onChangeDescription} />
        </div>
        <div className="form-group">
          <label>Duration (in minutes):</label>
          <input type="number" className="form-control" value={duration} onChange={onChangeDuration} />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" className="form-control" value={date} onChange={onChangeDate} />
        </div>
        <div className="form-group mt-3">
          <input type="submit" value="Create Exercise Log" className="btn btn-primary mr-2" />
        </div>
      </form>
    </div>
  );
};

export default CreateExercises;
