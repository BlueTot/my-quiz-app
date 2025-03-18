import React, { useState, useEffect } from 'react';

function App() {
  const [questions, setQuestions] = useState([]); // Initialize state for questions

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/questions.json`) // Ensure this file is in "public/"
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched data:', data); // Check the fetched data
        setQuestions(data); // Set the questions state
      })
      .catch(error => console.error('Error loading JSON:', error)); // Catch and log errors
  }, []);

  // // Fetch questions from the JSON file
  // useEffect(() => {
  //   fetch('/questions.json') // Ensure the file is in the "public" folder
  //     .then(response => response.json())
  //     .then(data => setQuestions(data)) // Set the questions state
  //     .catch(error => console.error('Error loading JSON:', error));
  // }, []); // Runs once when the component mounts

  // Update the document title based on the length of the questions
  useEffect(() => {
    document.title = `CS133 Revision Quiz - ${questions.length} Questions`;
  }, [questions.length]); // Runs whenever `questions.length` changes

  return (
    <div>
      <h1>CS133 Revision Quiz</h1>
      {questions.length > 0 ? (
        <div>
          <h2>{questions[0].question}</h2>
          <ul>
            {questions[0].options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading questions...</p>
      )}
    </div>
  );
}

export default App;