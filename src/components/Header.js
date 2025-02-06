import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold text-gray-800">Whisdom-dev</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-800 hover:text-gray-600">
              About
            </a>
            <a href="#skills" className="text-gray-800 hover:text-gray-600">
              Skills
            </a>
            <a href="#projects" className="text-gray-800 hover:text-gray-600">
              Projects
            </a>
            <a href="#contact" className="text-gray-800 hover:text-gray-600">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`${isOpen ? "block" : "hidden"} md:hidden mt-3 space-y-2 bg-white border border-gray-200 rounded-lg shadow-lg p-4`}>
          <a href="#about" className="block text-gray-800 hover:text-gray-600">
            About
          </a>
          <a href="#skills" className="block text-gray-800 hover:text-gray-600">
            Skills
          </a>
          <a href="#projects" className="block text-gray-800 hover:text-gray-600">
            Projects
          </a>
          <a href="#contact" className="block text-gray-800 hover:text-gray-600">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
