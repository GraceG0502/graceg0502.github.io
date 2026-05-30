import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <header className="fixed top-0 w-full z-50 bg-brand-alabaster/80 backdrop-blur-md">
      <nav className="flex justify-between items-center w-full px-margin-desktop py-gutter max-w-container-max mx-auto">
        <Link to="/" className="font-display-lg text-headline-lg font-bold text-on-surface">
          Grace
        </Link>
        <div className="hidden md:flex space-x-12 items-center">
          <Link
            to="/"
            className={`font-headline-md transition-colors duration-300 ${
              isActive('/') 
                ? 'text-primary border-b-2 border-primary pb-1' 
                : 'text-secondary hover:text-primary nav-underline'
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`font-headline-md transition-colors duration-300 ${
              isActive('/about') 
                ? 'text-primary border-b-2 border-primary pb-1' 
                : 'text-secondary hover:text-primary nav-underline'
            }`}
          >
            About
          </Link>
          <Link
            to="/projects"
            className={`font-headline-md transition-colors duration-300 ${
              isActive('/projects') 
                ? 'text-primary border-b-2 border-primary pb-1' 
                : 'text-secondary hover:text-primary nav-underline'
            }`}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={`font-headline-md transition-colors duration-300 ${
              isActive('/contact') 
                ? 'text-primary border-b-2 border-primary pb-1' 
                : 'text-secondary hover:text-primary nav-underline'
            }`}
          >
            Contact
          </Link>
          <Link
            to="/contact"
            className="bg-primary-container text-on-primary-container px-8 py-3 rounded-full font-bold transition-transform duration-200 active:scale-95"
          >
            Let's Talk
          </Link>
        </div>
        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <span className="material-symbols-outlined text-on-surface text-3xl">menu</span>
        </div>
      </nav>
    </header>
  )
}

export default Header
