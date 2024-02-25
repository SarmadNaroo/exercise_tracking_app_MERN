import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/exercises/')
      .then(res => {
        setExercises(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleEdit = (id) => {
    // Redirect to the edit page with the exercise ID
    navigate(`/edit/${id}`);
  };

  const handleDelete = (id) => {
    // Send a DELETE request to the backend API to delete the exercise with the given ID
    axios.delete(`http://localhost:5000/exercises/${id}`)
      .then(res => {
        console.log(res.data); // Log the response from the server
        // If the exercise was deleted successfully, update the exercises state to remove the deleted exercise
        setExercises(prevExercises => prevExercises.filter(exercise => exercise._id !== id));
      })
      .catch(err => {
        console.error(err); // Log any errors
        // Handle errors if necessary (e.g., show an error message to the user)
      });
  };
  

  return (
    <div>
      <h2>Exercise List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration (mins)</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map(exercise => (
            <tr key={exercise._id}>
              <td>{exercise.username}</td>
              <td>{exercise.description}</td>
              <td>{exercise.duration}</td>
              <td>{exercise.date}</td>
              <td>
                <Button variant="info" onClick={() => handleEdit(exercise._id)}>Edit</Button>{' '}
                <Button variant="danger" onClick={() => handleDelete(exercise._id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ExerciseList;
