import { useEffect, useRef, useState } from 'react';

export function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY.current) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, []);

  return (
    <header className={`fixed w-full top-0 bg-[#1E1E1E]/80 backdrop-blur-md z-50 transition-transform duration-300 ${
      isNavVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-white">&lt;/THK&gt;</div>
          
          {/* Menu Desktop */}
          <div className="hidden md:flex md:space-x-16 mr-16">
            <a href="#home" className="text-white hover:text-[#E94E35] transition-colors uppercase text-sm tracking-wider">home</a>
            <a href="#about" className="text-white hover:text-[#E94E35] transition-colors uppercase text-sm tracking-wider">about</a>
            <a href="#portfolio" className="text-white hover:text-[#E94E35] transition-colors uppercase text-sm tracking-wider">portfolio</a>
            <a href="#contact" className="text-white hover:text-[#E94E35] transition-colors uppercase text-sm tracking-wider">contact</a>
          </div>

          {/* Botão Menu Mobile */}
          <button
            className="text-white md:hidden z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* Menu Mobile */}
        <div className={`fixed inset-0 bg-[#1E1E1E]/95 backdrop-blur-lg md:hidden transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col items-center justify-center h-screen space-y-8">
            <a href="#home" className="text-white hover:text-[#E94E35] transition-colors uppercase text-xl tracking-wider">home</a>
            <a href="#about" className="text-white hover:text-[#E94E35] transition-colors uppercase text-xl tracking-wider">about</a>
            <a href="#portfolio" className="text-white hover:text-[#E94E35] transition-colors uppercase text-xl tracking-wider">portfolio</a>
            <a href="#contact" className="text-white hover:text-[#E94E35] transition-colors uppercase text-xl tracking-wider">contact</a>
          </div>
        </div>
      </div>
    </header>
  );
}
