
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="bg-gradient-to-r from-science-purple to-science-blue bg-clip-text text-2xl font-bold text-transparent">
              SciencePrep
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex">
            <Link to="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link to="/quizzes" className="text-sm font-medium hover:text-primary">
              Quizzes
            </Link>
            <Link to="/resources" className="text-sm font-medium hover:text-primary">
              Resources
            </Link>
            <Link to="/login">
              <Button variant="outline" size="sm" className="mr-2">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="rounded-md p-2 text-gray-500 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="mt-3 space-y-3 md:hidden">
            <Link 
              to="/" 
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/quizzes" 
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Quizzes
            </Link>
            <Link 
              to="/resources" 
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Resources
            </Link>
            <div className="flex gap-2 py-2">
              <Link to="/login" className="w-full" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full">
                  Login
                </Button>
              </Link>
              <Link to="/signup" className="w-full" onClick={() => setIsOpen(false)}>
                <Button className="w-full">Sign Up</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
