import { useState } from "react";
import { FaReact } from "react-icons/fa";
import { SiPython, SiNodedotjs, SiMongodb, SiJavascript, SiExpress  } from "react-icons/si";

export function AboutPage() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = [
    { name: 'Javascript', Icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Python', Icon: SiPython, color: '#3776AB' },
    { name: 'Node.js', Icon: SiNodedotjs, color: '#3C873A' },
    { name: 'React', Icon: FaReact, color: '#61DAFB' },
    { name: 'Next.js', Icon: SiExpress, color: '#000' },
    { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
  ];

  const renderText = () => (
    <>
      I am currently focused on developing personal projects to deepen my knowledge in fullstack programming. Although I don't have formal work experience in the tech industry yet, I've been dedicating myself to building practical solutions that challenge me and accelerate my learning.
      I'm pursuing a degree in Systems Analysis and Development and have basic knowledge in{' '}
      <span
        className="cursor-pointer text-[#F7DF1E] font-semibold hover:underline"
        onMouseEnter={() => setHoveredSkill('Javascript')}
        onMouseLeave={() => setHoveredSkill(null)}
      >JavaScript</span>,{' '}
      <span
        className="cursor-pointer text-[#3776AB] font-semibold hover:underline"
        onMouseEnter={() => setHoveredSkill('Python')}
        onMouseLeave={() => setHoveredSkill(null)}
      >Python</span>,{' '}
      <span
        className="cursor-pointer text-[#3C873A] font-semibold hover:underline"
        onMouseEnter={() => setHoveredSkill('Node.js')}
        onMouseLeave={() => setHoveredSkill(null)}
      >Node.js</span>,{' '}
      <span
        className="cursor-pointer text-[#61DAFB] font-semibold hover:underline"
        onMouseEnter={() => setHoveredSkill('React')}
        onMouseLeave={() => setHoveredSkill(null)}
      >React</span>, {' '}
      <span
        className="cursor-pointer text-black font-semibold hover:underline"
        onMouseEnter={() => setHoveredSkill('Next.js')}
        onMouseLeave={() => setHoveredSkill(null)}
      >Next.js</span>, and{' '}
      <span
        className="cursor-pointer text-[#47A248] font-semibold hover:underline"
        onMouseEnter={() => setHoveredSkill('MongoDB')}
        onMouseLeave={() => setHoveredSkill(null)}
      >MongoDB</span>. I'm looking for my first professional opportunity in the tech field, where I can apply what I've been learning, contribute to real-world projects, and continue growing as a developer.
    </>
  );

  return (
    <section id="about" className="min-h-screen flex items-center bg-[#252525]">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-white mb-16">About me</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl text-white">Experience</h3>
            <div className="flex items-center gap-8">
              <div className="flex-1">
                <p className="text-gray-400">{renderText()}</p>
              </div>
              <div className="hidden md:block">
                <div className="w-12 h-0.5 bg-[#E94E35]"></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {skills.map(({ name, Icon, color }) => (
              <div key={name} className="text-center group">
                <div
                  className={`w-20 h-20 mx-auto mb-4 p-4 rounded-xl bg-[#1E1E1E] flex items-center justify-center transition-all duration-300
                    ${hoveredSkill === name ? 'scale-110 ring-4 ring-[#E94E35] bg-[#E94E35]/10' : 'group-hover:bg-[#E94E35]/10'}
                  `}
                >
                  <Icon
                    size={40}
                    color={color}
                    className={`transition-transform duration-300 ${hoveredSkill === name ? 'scale-125' : ''}`}
                  />
                </div>
                <p className="text-white mt-2 font-medium">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 