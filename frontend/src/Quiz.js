import React, { useState, useEffect } from "react";

// Custom Card component
function Card({ children, className }) {
  return (
    <div className={`border rounded-2x1 shadow-lg p-6 bg-white ${className}`}>
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
      className={`px-6 py-3 rounded-lg font-semibold text-white transition ${className}`}
    >
      {children}
    </button>
  );
}

// Custom Input component with forwardRef to handle focus
const Input = ({ value, onChange, placeholder, className }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
  />
);


// Multiple-Choice Answer Component
const MultipleChoiceQuestion = ({ currentQuestion, selectedAnswer, handleAnswer }) => (
  <div className="mt-4 flex flex-col gap-3">
    {currentQuestion.options.map((option, index) => (
      <Button
      key={index}
      className={`w-full ${selectedAnswer === index
        ? index === currentQuestion.answer
          ? "bg-green-500 hover:bg-green-600"
          : "bg-red-500 hover:bg-red-600"
        : "bg-blue-500 hover:bg-blue-600"}
        `}
      onClick={() => handleAnswer(index)}
    >
      {option}
    </Button>
    ))}
  </div>
);


// Open-Ended Question Component
const OpenEndedQuestion = ({ currentQuestion, userInput, setUserInput, handleAnswer, canTryQuestion }) => {
  // Handler for input changes
  const handleInputChange = (index, event) => {
    const newValue = event.target.value;
    setUserInput((prevInput) => {
      const updatedInput = [...prevInput];
      updatedInput[index] = newValue;
      return updatedInput;
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    handleAnswer(); // Call the provided handleAnswer function
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex flex-col space-y-4">
      {currentQuestion.answer.map((_, index) => (
        <div key={index} className="flex flex-col">
          <label className="text-sm font-medium">{(currentQuestion.answer.length === 1) ? `Answer: ` : `Answer ${index + 1}: `}</label>
          <Input
            value={userInput[index] || ""}
            onChange={(e) => handleInputChange(index, e)}
            placeholder={(currentQuestion.answer.length === 1) ? `Type answer` : `Type answer ${index + 1}`}
            className="mt-1 border border-gray-300 rounded-lg p-2"
          />
        </div>
      ))}
      {canTryQuestion && (<Button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-600">
        Check Answer
      </Button>)}
    </form>
  );
};

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [userInput, setUserInput] = useState([]);
  const [feedback, setFeedback] = useState("");
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [numAnsweredQs, setNumAnsweredQs] = useState(0);
  const [numCorrectQs, setNumCorrectQs] = useState(0);
  const [canTryQuestion, setCanTryQuestion] = useState(true);


  const [user, setUser] = useState(null);

  const fetchUserData = async () => {
    const token = localStorage.getItem('token');
    if (!token) return;
  
    try {
      // Adjusted the URL to include the /auth prefix
      const response = await fetch("http://localhost:5000/auth/user", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
  
      const userData = await response.json();
      if (response.ok) {
        setUser(userData); // Save the user data in the state
      } else {
        console.error(userData.error); // Display error from backend if any
      }
    } catch (err) {
      console.error("Error fetching user data", err);
    }
  };

  useEffect(() => {
    fetchUserData(); // Fetch user data when the component loads
  }, []);


  // fetch questions from public directory
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/questions2.json`) // Ensure this file is in "public/"
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        return response.json();
      })
      .then((data) => {
        setQuestions(data); // Set the questions state
      })
      .catch((error) => console.error("Error loading JSON:", error)); // Catch and log errors
  }, []);

  // load new question, and set title
  useEffect(() => {
    document.title = `CS133 Revision Quiz - ${questions.length} Questions`;
    loadNewQuestion();
  }, [questions.length]);

  // load new question
  function loadNewQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(questions[randomIndex]);
    setSelectedAnswer(null);
    setUserInput(new Array(questions[randomIndex]?.answer.length || 0).fill("")); // reset user input
    setFeedback("");
    setWrongAttempts(0);
    setShowCorrectAnswer(false);
    setCanTryQuestion(true);
  }

  function startQuiz() {
    setQuizStarted(true);
    loadNewQuestion();
  }

  function stopQuiz() {
    setQuizStarted(false);
  }

  // multiple choice answer
  function handleMultipleChoiceAnswer(index) {
    if (canTryQuestion) {
      if (index === currentQuestion.answer) {
        setFeedback("✅ Correct!");
        setShowCorrectAnswer(false);
        setNumCorrectQs(count => count + 1);
        setNumAnsweredQs(count => count + 1);
        setCanTryQuestion(false);
      } else {
        const newWrongAttempts = wrongAttempts + 1;
        setFeedback(`❌ Incorrect! (${newWrongAttempts}/3)`);
        setWrongAttempts(newWrongAttempts);
        if (newWrongAttempts >= 3) {
          setShowCorrectAnswer(true);
          setNumAnsweredQs(count => count + 1);
          setCanTryQuestion(false);
        }
      }
      setSelectedAnswer(index);
    }
  }

  // text answer
  function handleTextAnswer() {

    if (canTryQuestion) {
      const sortedAnswers = [...currentQuestion.answer].sort().map(item => item.toLowerCase())
      const sortedUserInput = [...userInput].sort().map(item => item.toLowerCase())

      const intersection = sortedUserInput.filter(item => sortedAnswers.includes(item))
      if (intersection.length === currentQuestion.answer.length) {
        setFeedback((userInput.length === 1) ? "✅ Answer is correct!" : "✅ All answers correct!");
        setShowCorrectAnswer(false);
        setNumCorrectQs(count => count + 1);
        setNumAnsweredQs(count => count + 1);
        setCanTryQuestion(false);
      } else {
        const newWrongAttempts = wrongAttempts + 1;
        if (userInput.length === 1) {
          setFeedback(`❌ Answer is incorrect. (${newWrongAttempts}/3)`);
        } else {
          setFeedback(`❌ ${intersection.length} answers are correct. (${newWrongAttempts}/3)`);
        }
        setWrongAttempts(newWrongAttempts);
        if (newWrongAttempts >= 3) {
          setShowCorrectAnswer(true);
          setNumAnsweredQs(count => count + 1);
          setCanTryQuestion(false);
        }
      }
    }
  }

  // main html return statement
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      {user && <p>Welcome, {user.username}!</p>} {/* Display username */}
      {!quizStarted ? (
        <Card className="max-w-lg text-center p-6">
          <h1 className="text-3xl font-bold mb-4">CS133 Revision Quiz</h1>
          <p className="text-lg mb-6">Test your knowledge and track your progress!</p>
          <p className="text-lg mb-6">Score: {numCorrectQs}/{numAnsweredQs}</p>
          <Button className="bg-blue-500 hover:bg-blue-600" onClick={startQuiz}>
            Start Quiz
          </Button>
        </Card>
      ) : (
      <Card className="max-w-md w-full text-center p-4">
        <p>Score: {numCorrectQs}/{numAnsweredQs}</p>
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
                <OpenEndedQuestion
                  userInput={userInput}
                  currentQuestion={currentQuestion}
                  setUserInput={setUserInput}
                  handleAnswer={handleTextAnswer}
                  canTryQuestion={canTryQuestion}
                />
              )}

              <p className="mt-4 font-bold">{feedback}</p>

              {showCorrectAnswer && (
                <p className="mt-2 text-red-500">✅ Correct Answer: {Array.isArray(currentQuestion.answer) ? 
                                                                      currentQuestion.answer.join(", ") : 
                                                                      currentQuestion.answer}</p>
              )}

              <Button className="mt-4 bg-gray-700 hover:bg-gray-800" onClick={loadNewQuestion}>
                Next Question
              </Button>

              <Button className="mt-4 bg-gray-700 hover:bg-gray-800" onClick={stopQuiz}>
                Stop Quiz
              </Button>
            </>
          )}
        </CardContent>
      </Card>
      )}
    </div>
  );
}

export default Quiz;