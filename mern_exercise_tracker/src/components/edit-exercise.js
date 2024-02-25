import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditExercise = () => {
  const { id } = useParams(); // Get the exercise ID from the URL
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState('');

  useEffect(() => {
    // Fetch exercise data by ID when the component mounts
    axios.get(`http://localhost:5000/exercises/${id}`)
      .then(res => {
        setUsername(res.data.username);
        setDescription(res.data.description);
        setDuration(res.data.duration);
        setDate(res.data.date);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]); // Make sure to include id in the dependency array to re-fetch data when the ID changes

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

    axios.post(`http://localhost:5000/exercises/update/${id}`, exercise)
      .then(res => console.log(res.data));

    navigate('/'); // Redirect to the exercise list page after submitting the form
  };

  return (
    <div>
      <h3>Edit Exercise</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label>Username:</label>
          <input 
            type="text" 
            className="form-control" 
            value={username} 
            onChange={onChangeUsername} 
            required 
          />
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
          <input type="submit" value="Update Exercise" className="btn btn-primary mr-2" />
        </div>
      </form>
    </div>
  );
};

export default EditExercise;
