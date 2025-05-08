
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { QuizCard } from "@/components/QuizCard";

// Mock data
const recentQuizzes = [
  {
    id: "bio-cells-1",
    title: "Cells and Cell Structure",
    date: "2023-05-06",
    score: 85,
    total: 10,
    correct: 8.5,
  },
  {
    id: "chem-matter-1",
    title: "States of Matter",
    date: "2023-05-04",
    score: 70,
    total: 10,
    correct: 7,
  },
];

const recommendedQuizzes = [
  {
    id: "phys-forces-1",
    title: "Forces and Motion",
    description: "Understand Newton's laws of motion",
    subject: "Physics",
    difficulty: "Medium",
    questionCount: 12,
  },
  {
    id: "earth-weather-1",
    title: "Weather Systems",
    description: "Learn about climate and weather patterns",
    subject: "Earth Science",
    difficulty: "Medium",
    questionCount: 10,
  },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <h1 className="text-3xl font-bold">Student Dashboard</h1>
          <Button onClick={() => navigate("/quizzes")}>Find Quizzes</Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Stats Cards */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Quizzes Taken</CardTitle>
              <CardDescription>Your quiz activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
              <p className="text-xs text-muted-foreground">
                +2 from last week
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Average Score</CardTitle>
              <CardDescription>Across all quizzes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78%</div>
              <p className="text-xs text-muted-foreground">
                +5% from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Study Streak</CardTitle>
              <CardDescription>Days in a row</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3 Days 🔥</div>
              <p className="text-xs text-muted-foreground">
                Keep it up!
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Recent Activity */}
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Recent Quizzes</CardTitle>
              <CardDescription>Your latest quiz results</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {recentQuizzes.map((quiz) => (
                  <div key={quiz.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{quiz.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {quiz.date} • {quiz.correct} out of {quiz.total} correct
                        </p>
                      </div>
                      <span 
                        className={`text-sm font-semibold ${
                          quiz.score >= 80 ? "text-science-green" : 
                          quiz.score >= 60 ? "text-science-yellow" : 
                          "text-science-red"
                        }`}
                      >
                        {quiz.score}%
                      </span>
                    </div>
                    <Progress value={quiz.score} />
                  </div>
                ))}
                
                {recentQuizzes.length === 0 && (
                  <div className="py-8 text-center">
                    <p className="text-muted-foreground">No quizzes taken yet</p>
                    <Button 
                      variant="link" 
                      onClick={() => navigate("/quizzes")}
                      className="mt-2"
                    >
                      Take your first quiz
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Subject Progress */}
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Subject Progress</CardTitle>
              <CardDescription>Your performance by subject</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="biology">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="biology">Biology</TabsTrigger>
                  <TabsTrigger value="chemistry">Chemistry</TabsTrigger>
                  <TabsTrigger value="physics">Physics</TabsTrigger>
                  <TabsTrigger value="earth">Earth</TabsTrigger>
                </TabsList>
                <TabsContent value="biology" className="mt-4 space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Cell Biology</span>
                      <span className="text-sm font-semibold">85%</span>
                    </div>
                    <Progress value={85} />
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Genetics</span>
                      <span className="text-sm font-semibold">60%</span>
                    </div>
                    <Progress value={60} />
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Ecosystems</span>
                      <span className="text-sm font-semibold">42%</span>
                    </div>
                    <Progress value={42} />
                  </div>
                </TabsContent>
                
                <TabsContent value="chemistry" className="mt-4 space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">States of Matter</span>
                      <span className="text-sm font-semibold">70%</span>
                    </div>
                    <Progress value={70} />
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">Elements</span>
                      <span className="text-sm font-semibold">50%</span>
                    </div>
                    <Progress value={50} />
                  </div>
                </TabsContent>
                
                <TabsContent value="physics" className="mt-4 space-y-4">
                  <div className="py-8 text-center">
                    <p className="text-muted-foreground">No quizzes taken yet in Physics</p>
                    <Button 
                      variant="link" 
                      onClick={() => navigate("/quizzes?subject=Physics")}
                      className="mt-2"
                    >
                      Take a Physics quiz
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="earth" className="mt-4 space-y-4">
                  <div className="py-8 text-center">
                    <p className="text-muted-foreground">No quizzes taken yet in Earth Science</p>
                    <Button 
                      variant="link" 
                      onClick={() => navigate("/quizzes?subject=Earth+Science")}
                      className="mt-2"
                    >
                      Take an Earth Science quiz
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
        
        {/* Recommended Quizzes */}
        <div className="mt-8">
          <h2 className="mb-4 text-2xl font-bold">Recommended for You</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recommendedQuizzes.map((quiz) => (
              <QuizCard
                key={quiz.id}
                id={quiz.id}
                title={quiz.title}
                description={quiz.description}
                subject={quiz.subject}
                difficulty={quiz.difficulty as "Easy" | "Medium" | "Hard"}
                questionCount={quiz.questionCount}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
