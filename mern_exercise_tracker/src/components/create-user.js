import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');

  const navigate = useNavigate();

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const user = {
      username,
    };
    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    navigate('/');
  };


  return (
    <div>
      <h3>Create New User</h3>
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
        </div>
        <div className="form-group mt-3">
          <input type="submit" value="Create User" className="btn btn-primary mr-2" />
        </div>
      </form>
    </div>
  );
};

export default CreateUser;