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
    <header className={`fixed w-full top-0 bg-[#1E1E1E] z-50 transition-transform duration-300 ${
      isNavVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-white">&lt;/THK&gt;</div>
          <button
            className="text-white md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            &#9776;
          </button>
          <div className={`flex-col md:flex md:flex-row md:space-x-16 mr-16 ${isMenuOpen ? 'flex' : 'hidden'}`}>
            <a href="#home" className="text-white hover:text-[#E94E35] transition-colors uppercase text-sm tracking-wider">home</a>
            <a href="#about" className="text-white hover:text-[#E94E35] transition-colors uppercase text-sm tracking-wider">about</a>
            <a href="#portfolio" className="text-white hover:text-[#E94E35] transition-colors uppercase text-sm tracking-wider">portfolio</a>
            <a href="#contact" className="text-white hover:text-[#E94E35] transition-colors uppercase text-sm tracking-wider">contact</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
