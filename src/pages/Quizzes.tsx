
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { QuizCard } from "@/components/QuizCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock quiz data
const quizzes = [
  {
    id: "bio-cells-1",
    title: "Cells and Cell Structure",
    description: "Learn about cell organelles and their functions",
    subject: "Biology",
    grade: "6",
    difficulty: "Easy",
    questionCount: 10,
  },
  {
    id: "chem-matter-1",
    title: "States of Matter",
    description: "Explore solids, liquids, and gases",
    subject: "Chemistry",
    grade: "6",
    difficulty: "Easy",
    questionCount: 8,
  },
  {
    id: "phys-forces-1",
    title: "Forces and Motion",
    description: "Understand Newton's laws of motion",
    subject: "Physics",
    grade: "7",
    difficulty: "Medium",
    questionCount: 12,
  },
  {
    id: "earth-weather-1",
    title: "Weather Systems",
    description: "Learn about climate and weather patterns",
    subject: "Earth Science",
    grade: "7",
    difficulty: "Medium",
    questionCount: 10,
  },
  {
    id: "bio-genetics-1",
    title: "Genetics and Heredity",
    description: "Explore DNA, genes, and genetic inheritance",
    subject: "Biology",
    grade: "8",
    difficulty: "Hard",
    questionCount: 15,
  },
  {
    id: "chem-reactions-1",
    title: "Chemical Reactions",
    description: "Learn about different types of chemical reactions",
    subject: "Chemistry",
    grade: "8",
    difficulty: "Hard",
    questionCount: 12,
  },
];

const Quizzes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("all");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [currentGrade, setCurrentGrade] = useState("all");

  // Filter quizzes based on search term and filters
  const filteredQuizzes = quizzes.filter((quiz) => {
    const matchesSearch = quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         quiz.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = subjectFilter === "all" || quiz.subject === subjectFilter;
    const matchesDifficulty = difficultyFilter === "all" || quiz.difficulty === difficultyFilter;
    const matchesGrade = currentGrade === "all" || quiz.grade === currentGrade;

    return matchesSearch && matchesSubject && matchesDifficulty && matchesGrade;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="mb-6 text-center text-3xl font-bold">Science Quizzes</h1>
        
        <div className="mb-8">
          <Tabs defaultValue="all" onValueChange={setCurrentGrade}>
            <TabsList className="mx-auto grid w-full max-w-md grid-cols-4">
              <TabsTrigger value="all">All Grades</TabsTrigger>
              <TabsTrigger value="6">6th Grade</TabsTrigger>
              <TabsTrigger value="7">7th Grade</TabsTrigger>
              <TabsTrigger value="8">8th Grade</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <p className="mt-2 text-center text-sm text-muted-foreground">
                Showing quizzes for all grade levels
              </p>
            </TabsContent>
            <TabsContent value="6">
              <p className="mt-2 text-center text-sm text-muted-foreground">
                Quizzes specifically for 6th grade students
              </p>
            </TabsContent>
            <TabsContent value="7">
              <p className="mt-2 text-center text-sm text-muted-foreground">
                Quizzes specifically for 7th grade students
              </p>
            </TabsContent>
            <TabsContent value="8">
              <p className="mt-2 text-center text-sm text-muted-foreground">
                Quizzes specifically for 8th grade students
              </p>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <div>
            <Input
              placeholder="Search quizzes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div>
            <Select value={subjectFilter} onValueChange={setSubjectFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Select Subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subjects</SelectItem>
                <SelectItem value="Biology">Biology</SelectItem>
                <SelectItem value="Chemistry">Chemistry</SelectItem>
                <SelectItem value="Physics">Physics</SelectItem>
                <SelectItem value="Earth Science">Earth Science</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Select Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Difficulties</SelectItem>
                <SelectItem value="Easy">Easy</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {filteredQuizzes.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredQuizzes.map((quiz) => (
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
        ) : (
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600">No quizzes match your search criteria.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Quizzes;
