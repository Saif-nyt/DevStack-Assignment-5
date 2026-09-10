import { useState } from "react";
import logo from "../assets/logo.png";
const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="DevStack" className="h-7 w-7" />

            <h1 className="text-xl font-bold">
              Dev <span className="text-pink-500">Stack</span>
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-7 text-sm text-gray-600">
            <a className="text-pink-500" href="#">
              Home
            </a>
            <a href="#technologies">Technologies</a>
            <a href="#">Projects</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm text-gray-600">Sign In</button>

            <button className="text-sm text-white px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600">
              Sign Up
            </button>
          </div>

          {/* Mobile  */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-5 pb-5">
            <div className="flex flex-col gap-4 text-sm text-gray-600">
              <a href="#">Home</a>
              <a href="#technologies">Technologies</a>
              <a href="#">Projects</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
