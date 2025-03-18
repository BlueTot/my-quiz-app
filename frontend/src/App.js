// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Quiz from "./Quiz";  // Import the Quiz component
import Login from "./Login";  // Import the Login component
import Register from "./Register";  // Import the Register component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route to the login page */}
          <Route path="/login" element={<Login />} />
          
          {/* Route to the registration page */}
          <Route path="/register" element={<Register />} />
          
          {/* Route to the quiz page (protected) */}
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
