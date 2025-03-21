
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronRight, Compass } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { title: "Accueil", path: "/" },
    { title: "Orientation", path: "/orientation" },
    { title: "Universités", path: "/universities" },
    { title: "Simulation de carrière", path: "/career" },
    { title: "À propos", path: "/about" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-white/90 backdrop-blur-md shadow-md"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-serif font-bold text-burgundy"
        >
          <Compass className="h-8 w-8 text-gold" />
          <span className="animate-fade-in">OrientPlus</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="text-burgundy hover:text-burgundy-light font-medium transition duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {link.title}
            </Link>
          ))}
          <Link
            to="/orientation"
            className="btn-primary flex items-center gap-1"
          >
            Commencer <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-burgundy">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass-card absolute top-full left-0 right-0 p-5 shadow-lg animate-slide-down">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-burgundy hover:text-burgundy-light font-medium py-2 transition duration-200 border-b border-burgundy/10"
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <Link
              to="/orientation"
              className="btn-primary flex items-center justify-center gap-1 mt-2"
              onClick={() => setIsOpen(false)}
            >
              Commencer <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
