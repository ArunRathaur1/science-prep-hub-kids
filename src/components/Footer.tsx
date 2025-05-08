
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <span className="bg-gradient-to-r from-science-purple to-science-blue bg-clip-text text-xl font-bold text-transparent">
              SciencePrep
            </span>
            <p className="mt-4 text-sm text-gray-600">
              Helping middle school students excel in science through interactive quizzes and resources.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/quizzes" className="text-gray-600 hover:text-primary">
                  Quizzes
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-600 hover:text-primary">
                  Resources
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 font-semibold">Subjects</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/quizzes/biology" className="text-gray-600 hover:text-primary">
                  Biology
                </Link>
              </li>
              <li>
                <Link to="/quizzes/chemistry" className="text-gray-600 hover:text-primary">
                  Chemistry
                </Link>
              </li>
              <li>
                <Link to="/quizzes/physics" className="text-gray-600 hover:text-primary">
                  Physics
                </Link>
              </li>
              <li>
                <Link to="/quizzes/earth-science" className="text-gray-600 hover:text-primary">
                  Earth Science
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 font-semibold">Account</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/login" className="text-gray-600 hover:text-primary">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-gray-600 hover:text-primary">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} SciencePrep. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
