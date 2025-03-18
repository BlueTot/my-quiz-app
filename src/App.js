import React, { useState, useEffect } from "react";

// Custom Card component
function Card({ children, className }) {
  return (
    <div className={`border rounded-lg shadow-md p-4 bg-white ${className}`}>
      {children}
    </div>
  );
}

// Custom CardContent component
function CardContent({ children }) {
  return <div className="p-2">{children}</div>;
}

// Custom Button component
function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition ${className}`}
    >
      {children}
    </button>
  );
}

// Custom Input component
function Input({ value, onChange, placeholder, className }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    />
  );
}


export default function QuizApp() {


  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [userInput, setUserInput] = useState([]);
  const [feedback, setFeedback] = useState("");
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);


  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/questions2.json`) // Ensure this file is in "public/"
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


  useEffect(() => {
    document.title = `CS133 Revision Quiz - ${questions.length} Questions`
    loadNewQuestion();
  }, [questions.length]);


  function loadNewQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(questions[randomIndex]);
    setSelectedAnswer(null);
    setUserInput([""]);
    setFeedback("");
    setWrongAttempts(0);
    setShowCorrectAnswer(false);
  }


  function handleMultipleChoiceAnswer(index) {
    if (index === currentQuestion.answer) {
      setFeedback("✅ Correct!");
      setShowCorrectAnswer(false);
    } else {
      const newWrongAttempts = wrongAttempts + 1;
      setFeedback(`❌ Incorrect! (${newWrongAttempts}/3)`);
      setWrongAttempts(newWrongAttempts);
      if (newWrongAttempts >= 3) {
        setShowCorrectAnswer(true);
      }
    }
    setSelectedAnswer(index);
  }


  function handleTextAnswer() {
    const correctness = currentQuestion.answer.map(
      (correct, i) => userInput[i]?.trim().toLowerCase() === correct.toLowerCase()
    );

    if (correctness.every(isCorrect => isCorrect)) {
      setFeedback("✅ All answers correct!");
    } else {
      setFeedback("❌ Some answers are incorrect.");
      setShowCorrectAnswer(true);
    }
    // if (userInput.trim().toLowerCase() === currentQuestion.answer.toLowerCase()) {
    //   setFeedback("✅ Correct!");
    //   setShowCorrectAnswer(false);
    // } else {
    //   const newWrongAttempts = wrongAttempts + 1;
    //   setFeedback(`❌ Incorrect! (${newWrongAttempts}/3)`);
    //   setWrongAttempts(newWrongAttempts);
    //   if (newWrongAttempts >= 3) {
    //     setShowCorrectAnswer(true);
    //   }
    // }
  }


  // Multiple-Choice Answer Component
  const MultipleChoiceQuestion = ({ currentQuestion, selectedAnswer, handleAnswer }) => (
    <div className="mt-4 flex flex-col gap-2">
      {currentQuestion.options.map((option, index) => (
        <Button
          key={index}
          className={`w-full ${selectedAnswer === index
            ? index === currentQuestion.answer
              ? "bg-green-500"
              : "bg-red-500"
            : ""
            }`}
          onClick={() => handleAnswer(index)}
        >
          {option}
        </Button>
      ))}
    </div>
  );


  // // Open-Ended Question Component
  // const OpenEndedQuestion = ({ userInput, setUserInput, handleAnswer }) => (
  //   <div className="mt-4">
  //     <Input
  //       value={userInput}
  //       onChange={(e) => setUserInput(e.target.value)}
  //       placeholder="Type your answer..."
  //     />

  //     <Button className="mt-2 bg-blue-500 hover:bg-blue-600" onClick={handleAnswer}>
  //       Check Answer
  //     </Button>
  //   </div >
  // );


  // Multiple Open-Ended Question Component

  const MultipleOpenEndedQuestion = ({ currentQuestion, userInput, setUserInput, handleAnswer }) => (
    <div className="mt-4 flex flex-col space-y-4">  {/* Ensure vertical stacking */}
      {currentQuestion.answer.map((_, index) => (
        <div key={index} className="flex flex-col">
          <label className="text-sm font-medium">Answer {index + 1}: </label>
          <Input
            value={userInput[index] || ""}
            onChange={(e) => {
              const newValue = e.target.value;
              setUserInput (prevInput => {
                const updatedInput = [...prevInput];
                updatedInput[index] = newValue;
                return updatedInput;
              });
            }}
            placeholder={`Type answer ${index + 1}`}
            className="mt-1 border border-gray-300 rounded-lg p-2"
          />
        </div>
      ))}
      <Button className="mt-4 bg-blue-500 hover:bg-blue-600" onClick={handleAnswer}>
        Check Answer
      </Button>
    </div>
  );

  // Main HTML return statement
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <Card className="max-w-md w-full text-center p-4">
        <CardContent>
          {currentQuestion && (
            <>
              <h2 className="text-xl font-semibold">{currentQuestion.question}</h2>

              {currentQuestion.options ? (
                <MultipleChoiceQuestion
                  currentQuestion={currentQuestion}
                  selectedAnswer={selectedAnswer}
                  handleAnswer={handleMultipleChoiceAnswer}
                />
              ) : (
                <MultipleOpenEndedQuestion
                  userInput={userInput}
                  currentQuestion={currentQuestion}
                  setUserInput={setUserInput}
                  handleAnswer={handleTextAnswer}
                />
              )}

              <p className="mt-4 font-bold">{feedback}</p>

              {showCorrectAnswer && (
                <p className="mt-2 text-red-500">✅ Correct Answer: {currentQuestion.answer}</p>
              )}

              <Button className="mt-4 bg-gray-700 hover:bg-gray-800" onClick={loadNewQuestion}>
                Next Question
              </Button>
            </>
          )}
        </CardContent>
      </Card >
    </div >
  );
}
