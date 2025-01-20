import { Header } from '../../components/Navbar';
import { Hero } from '../../components/Hero';
import { About } from '../../components/About';
import { Portfolio } from '../../components/Portfolio';
import { Contact } from '../../components/Contact';

export function Home() {
  const skills = [
    { name: 'React', icon: '/react-icon.png' },
    { name: 'TypeScript', icon: '/ts-icon.png' },
    { name: 'Tailwind', icon: '/tailwind-icon.png' },
  ];

  const projects = [
    { id: 1, title: 'Sabor Caseiro', image: '/project1.jpg' },
    { id: 2, title: 'Portfolio', image: '/project2.jpg' },
  ];

  return (
    <div className="bg-[#1E1E1E] min-h-screen">
      <Header />
      <Hero
        name="Kimura"
        role="Web Developer"
        description="Frontend Developer / Creative Coder"
      />
      <About
        skills={skills}
        experience="Desenvolvedor Frontend apaixonado por criar experiências web interativas e responsivas. Especializado em React, TypeScript e Tailwind CSS."
      />
      <Portfolio projects={projects} />
      <Contact />
    </div>
  );
} 