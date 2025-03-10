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

const questions = [
  {
    question: "What are the three defining features of a profession?",
    options: [
      "Body of people, Self governing, Entry controlled",
      "High salary, Degree required, Government regulated",
      "Any job, No formal qualification, Open entry",
      "Work-life balance, High prestige, Public service"
    ],
    answer: 0
  },
  {
    question: "What is the last step for a bill to become law in the UK?",
    options: [
      "House of Lords Approval",
      "Royal Assent",
      "Third Reading in Commons",
      "Public Referendum"
    ],
    answer: 1
  },
  {
    question: "Which UK body supervises data protection?",
    options: [
      "Information Commissioner's Office (ICO)",
      "British Computer Society (BCS)",
      "Science Council",
      "European Court of Justice"
    ],
    answer: 0
  }
];

export default function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    loadNewQuestion();
  }, []);

  function loadNewQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(questions[randomIndex]);
    setSelectedAnswer(null);
    setFeedback("");
  }

  function handleAnswer(index) {
    setSelectedAnswer(index);
    if (index === currentQuestion.answer) {
      setFeedback("✅ Correct!");
    } else {
      setFeedback("❌ Incorrect, try again!");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <Card className="max-w-md w-full text-center p-4">
        <CardContent>
          {currentQuestion && (
            <>
              <h2 className="text-xl font-semibold">{currentQuestion.question}</h2>
              <div className="mt-4 flex flex-col gap-2">
                {currentQuestion.options.map((option, index) => (
                  <Button
                    key={index}
                    className={`w-full ${
                      selectedAnswer === index
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
              <p className="mt-4 font-bold">{feedback}</p>
              <Button className="mt-4 bg-gray-700 hover:bg-gray-800" onClick={loadNewQuestion}>
                Next Question
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

