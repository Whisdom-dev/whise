function Header() {
    return (
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-gray-800">Whisdom-dev</div>
            <div className="hidden md:flex space-x-4">
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
          </div>
        </nav>
      </header>
    )
  }
  
  export default Header
  
  