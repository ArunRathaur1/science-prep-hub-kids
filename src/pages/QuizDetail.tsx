
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout } from "@/components/Layout";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

// Mock quiz data
const quizzes = {
  "bio-cells-1": {
    title: "Cells and Cell Structure",
    description: "Test your knowledge about cells and their functions",
    subject: "Biology",
    questions: [
      {
        id: "q1",
        text: "What is the basic unit of life?",
        options: [
          { id: "a", text: "Atom" },
          { id: "b", text: "Cell" },
          { id: "c", text: "Molecule" },
          { id: "d", text: "Organ" },
        ],
        correctOption: "b",
      },
      {
        id: "q2",
        text: "Which organelle is known as the 'powerhouse' of the cell?",
        options: [
          { id: "a", text: "Nucleus" },
          { id: "b", text: "Endoplasmic reticulum" },
          { id: "c", text: "Mitochondria" },
          { id: "d", text: "Golgi apparatus" },
        ],
        correctOption: "c",
      },
      {
        id: "q3",
        text: "Which of the following is NOT a function of the cell membrane?",
        options: [
          { id: "a", text: "Protection" },
          { id: "b", text: "Transport of materials" },
          { id: "c", text: "Energy production" },
          { id: "d", text: "Cell recognition" },
        ],
        correctOption: "c",
      },
    ],
  },
};

const QuizDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [quizComplete, setQuizComplete] = useState(false);
  const [score, setScore] = useState(0);
  
  // If quiz doesn't exist, show error
  if (!id || !quizzes[id as keyof typeof quizzes]) {
    return (
      <Layout>
        <div className="container mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 py-12">
          <h1 className="mb-4 text-4xl font-bold">Quiz Not Found</h1>
          <p className="mb-8 text-lg text-gray-600">The quiz you're looking for doesn't exist.</p>
          <Button onClick={() => navigate("/quizzes")}>
            Back to Quizzes
          </Button>
        </div>
      </Layout>
    );
  }
  
  const quiz = quizzes[id as keyof typeof quizzes];
  const totalQuestions = quiz.questions.length;
  const currentQuestionData = quiz.questions[currentQuestion];
  
  const handleAnswer = (optionId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestionData.id]: optionId,
    }));
  };
  
  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      // Calculate score
      let correctCount = 0;
      Object.keys(answers).forEach((questionId) => {
        const question = quiz.questions.find((q) => q.id === questionId);
        if (question && answers[questionId] === question.correctOption) {
          correctCount++;
        }
      });
      
      const finalScore = Math.round((correctCount / totalQuestions) * 100);
      setScore(finalScore);
      setQuizComplete(true);
      
      // Show toast
      if (finalScore >= 70) {
        toast.success(`Great job! You scored ${finalScore}%`);
      } else {
        toast(`You scored ${finalScore}%. Try again to improve!`);
      }
    }
  };
  
  const handleRetry = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setQuizComplete(false);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {!quizComplete ? (
          <>
            <div className="mb-8">
              <h1 className="mb-2 text-center text-3xl font-bold">{quiz.title}</h1>
              <p className="text-center text-gray-600">{quiz.description}</p>
            </div>
            
            <div className="mb-6">
              <div className="mb-2 flex justify-between text-sm">
                <span>Question {currentQuestion + 1} of {totalQuestions}</span>
                <span>{Math.round(((currentQuestion + 1) / totalQuestions) * 100)}% Complete</span>
              </div>
              <Progress value={((currentQuestion + 1) / totalQuestions) * 100} />
            </div>
            
            <Card className="mx-auto max-w-3xl">
              <CardHeader>
                <CardTitle className="text-xl">
                  {currentQuestionData.text}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={answers[currentQuestionData.id]}
                  onValueChange={(value) => handleAnswer(value)}
                >
                  {currentQuestionData.options.map((option) => (
                    <div
                      key={option.id}
                      className="flex items-center space-x-2 rounded-md border p-4 transition-all hover:bg-muted"
                    >
                      <RadioGroupItem id={`option-${option.id}`} value={option.id} />
                      <Label htmlFor={`option-${option.id}`} className="flex-1 cursor-pointer">
                        {option.text}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={handleNext}
                  className="ml-auto"
                  disabled={!answers[currentQuestionData.id]}
                >
                  {currentQuestion < totalQuestions - 1 ? "Next Question" : "Finish Quiz"}
                </Button>
              </CardFooter>
            </Card>
          </>
        ) : (
          <Card className="mx-auto max-w-2xl">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Quiz Complete!</CardTitle>
              <CardDescription className="text-center">
                You've completed the {quiz.title} quiz
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
              <div className="mx-auto my-6 h-36 w-36 rounded-full bg-primary/10 p-2">
                <div className="flex h-full w-full flex-col items-center justify-center rounded-full border-4 border-primary">
                  <span className="text-4xl font-bold">{score}%</span>
                </div>
              </div>
              
              <p>
                You answered {Object.values(answers).filter(
                  (answer, index) => answer === quiz.questions[index].correctOption
                ).length} out of {totalQuestions} questions correctly.
              </p>
              
              {score >= 70 ? (
                <p className="text-science-green">Great job! You passed the quiz!</p>
              ) : (
                <p className="text-science-orange">Keep studying and try again to improve your score.</p>
              )}
            </CardContent>
            <CardFooter className="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:space-x-2 sm:space-y-0">
              <Button variant="outline" onClick={handleRetry}>
                Try Again
              </Button>
              <Button onClick={() => navigate("/quizzes")}>
                Back to Quizzes
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </Layout>
  );
};

export default QuizDetail;
