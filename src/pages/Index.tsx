
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  const subjects = [
    {
      title: "Biology",
      description: "Explore living organisms, cells, genetics, and ecosystems",
      color: "bg-science-blue/10 border-science-blue/20",
      icon: "🧬",
    },
    {
      title: "Chemistry",
      description: "Learn about matter, atoms, elements, and chemical reactions",
      color: "bg-science-purple/10 border-science-purple/20",
      icon: "⚗️",
    },
    {
      title: "Physics",
      description: "Discover forces, energy, motion, and the laws of nature",
      color: "bg-science-orange/10 border-science-orange/20",
      icon: "🔭",
    },
    {
      title: "Earth Science",
      description: "Study our planet, weather, geology, and space",
      color: "bg-science-teal/10 border-science-teal/20",
      icon: "🌎",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-science-purple/5 px-4 py-16 sm:py-24">
        <div className="container mx-auto grid gap-12 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">
              Science <span className="bg-gradient-to-r from-science-purple to-science-blue bg-clip-text text-transparent">Prep</span> Hub
            </h1>
            <p className="mb-6 text-lg text-gray-600 sm:text-xl">
              Fun, interactive science quizzes for 6th-8th grade students to ace their exams!
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/signup">
                <Button size="lg" className="btn-hover-effect">
                  Get Started
                </Button>
              </Link>
              <Link to="/quizzes">
                <Button size="lg" variant="outline" className="btn-hover-effect">
                  Try a Quiz
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-72 w-72">
              <div className="absolute left-0 top-0 h-56 w-56 animate-float rounded-full bg-science-blue/10"></div>
              <div className="absolute bottom-0 right-8 h-48 w-48 animate-float rounded-full bg-science-purple/10 [animation-delay:1s]"></div>
              <div className="absolute left-8 right-8 top-8 flex h-56 w-56 items-center justify-center rounded-full bg-white shadow-lg">
                <span className="text-7xl">🔬</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold">Why Students Love Us</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="science-card">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-science-purple/10 text-3xl">
                📚
              </div>
              <h3 className="mb-2 text-xl font-bold">Aligned Curriculum</h3>
              <p className="text-gray-600">
                Our quizzes match exactly what you're learning in class
              </p>
            </CardContent>
          </Card>
          
          <Card className="science-card">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-science-blue/10 text-3xl">
                🏆
              </div>
              <h3 className="mb-2 text-xl font-bold">Track Progress</h3>
              <p className="text-gray-600">
                See your improvement over time with detailed stats
              </p>
            </CardContent>
          </Card>
          
          <Card className="science-card">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-science-green/10 text-3xl">
                🎮
              </div>
              <h3 className="mb-2 text-xl font-bold">Fun Learning</h3>
              <p className="text-gray-600">
                Engaging quizzes make studying science enjoyable
              </p>
            </CardContent>
          </Card>
          
          <Card className="science-card">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-science-orange/10 text-3xl">
                🚀
              </div>
              <h3 className="mb-2 text-xl font-bold">Better Grades</h3>
              <p className="text-gray-600">
                Students who use our platform see improved test scores
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Subject Areas */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto">
          <h2 className="mb-4 text-center text-3xl font-bold">Explore Science Subjects</h2>
          <p className="mb-12 text-center text-lg text-gray-600">
            Comprehensive quizzes covering all key middle school science topics
          </p>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {subjects.map((subject) => (
              <Card key={subject.title} className={`border-2 transition-all hover:shadow-md ${subject.color}`}>
                <CardContent className="p-6">
                  <div className="mb-4 text-4xl">{subject.icon}</div>
                  <h3 className="mb-2 text-xl font-bold">{subject.title}</h3>
                  <p className="mb-4 text-sm text-gray-600">
                    {subject.description}
                  </p>
                  <Link to={`/quizzes?subject=${subject.title}`}>
                    <Button variant="outline" size="sm">
                      Explore Quizzes
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-science-purple to-science-blue px-4 py-16 text-white">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Ace Your Science Exams?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Join thousands of middle school students already improving their grades with Science Prep Hub!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/signup">
              <Button size="lg" variant="secondary" className="btn-hover-effect">
                Create Free Account
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 btn-hover-effect">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
