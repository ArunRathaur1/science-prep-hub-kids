
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface QuizCardProps {
  id: string;
  title: string;
  description: string;
  subject: string;
  difficulty: "Easy" | "Medium" | "Hard";
  questionCount: number;
}

export const QuizCard = ({
  id,
  title,
  description,
  subject,
  difficulty,
  questionCount,
}: QuizCardProps) => {
  const difficultyColor = {
    Easy: "bg-science-green text-white",
    Medium: "bg-science-yellow text-white",
    Hard: "bg-science-red text-white",
  }[difficulty];

  const subjectColor = {
    Biology: "bg-science-blue/10 text-science-blue",
    Chemistry: "bg-science-purple/10 text-science-purple",
    Physics: "bg-science-orange/10 text-science-orange",
    "Earth Science": "bg-science-teal/10 text-science-teal",
  }[subject as keyof typeof subjectColor] || "bg-gray-100 text-gray-800";

  return (
    <Card className="science-card overflow-hidden">
      <CardHeader>
        <div className="flex flex-wrap gap-2">
          <Badge className={subjectColor}>{subject}</Badge>
          <Badge className={difficultyColor}>{difficulty}</Badge>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500">{questionCount} Questions</p>
      </CardContent>
      <CardFooter>
        <Link to={`/quizzes/${id}`} className="w-full">
          <Button className="w-full">Start Quiz</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
