import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/navbar.component";
import ExerciseList from "./components/exercise-list";
import EditExercise from "./components/edit-exercise";
import CreateExercise from "./components/create-exercise";
import CreateUser from "./components/create-user";

function App() {
  return (
    <Router>
      <Navbar/>
        <br/>
        <Route path="/" exact Component={ExerciseList} />
        <Route path="/edit/:id" Component={EditExercise} />
        <Route path="/create" Component={CreateExercise} />
        <Route path="/user" Component={CreateUser} />
    </Router>
  );
}

export default App;
