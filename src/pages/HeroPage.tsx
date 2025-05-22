import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Navbar } from '../components/Navbar';
import { FaInstagram, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

export function HeroPage() {
  const el = useRef(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    const options = {
      strings: ['Web Developer', 'Father', 'Gamer', 'Musician'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      cursorChar: '|',
    };

    if (el.current) {
      typed.current = new Typed(el.current, options);
    }

    return () => {
      typed.current?.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <section id="home" className="min-h-screen flex items-center justify-center bg-[#1E1E1E] font-['Inter']">
        <div className="container mx-auto px-8">
          <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="text-white space-y-8 text-center md:text-left max-w-lg w-full">
              <h1 className="text-4xl md:text-[4rem] font-light leading-tight min-h-[12rem]">
                I'm Kimura, a<br />
                <span className="flex md:block justify-center md:justify-start text-[#E94E35] h-[6rem] min-w-0 max-w-full overflow-x-auto">
                  <span ref={el}></span>
                </span>
              </h1>
              <p className="text-gray-400 text-lg">Fullstack Developer / Creative Coder</p>
              <div className="flex justify-center md:justify-start gap-6 mt-4">
                <a href="https://instagram.com/thalleskimura" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400 text-3xl transition-colors" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://github.com/thkimura" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-3xl transition-colors" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/thalles-kimura-4a2652218" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 text-3xl transition-colors" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="https://facebook.com/thalleskimura" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-500 text-3xl transition-colors" aria-label="Facebook">
                  <FaFacebook />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="w-60 h-96 rounded-[69px] overflow-hidden bg-[#4A656A] backdrop-blur-sm shadow-[0_0_160px_rgba(74,101,106,0.5)]">
                <img 
                  src="/hero-bg.jpg"
                  alt="Thalles Kimura"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300 hover:scale-180 scale-150"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#E94E35] rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full hidden md:flex justify-center absolute left-0 bottom-8 z-10">
        <a href="#about" className="animate-bounce text-[#E94E35]">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </>
  );
} 