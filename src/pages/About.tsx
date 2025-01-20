import { FaReact } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiHtml5, SiCss3, SiJavascript  } from "react-icons/si";

export function AboutPage() {
  const skills = [
    { 
      name: 'React', 
      Icon: FaReact,
      color: '#61DAFB'
    },
    { 
      name: 'TypeScript', 
      Icon: SiTypescript,
      color: '#007ACC'
    },
    { 
      name: 'Tailwind', 
      Icon: SiTailwindcss,
      color: '#06B6D4'
    },
    { 
      name: 'Html', 
      Icon: SiHtml5,
      color: '#06B6D4'
    },
    { 
      name: 'Css', 
      Icon: SiCss3,
      color: '#06B6D4'
    },
    { 
      name: 'Javascript', 
      Icon: SiJavascript,
      color: '#06B6D4'
    },
    
  ];

  return (
    <section id="about" className="min-h-screen flex items-center bg-[#252525]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-16">about me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl text-white">Experience</h3>
            <div className="flex items-center gap-8">
              <div className="flex-1">
                <p className="text-gray-400">
                  Desenvolvedor Frontend apaixonado por criar experiências web interativas e responsivas.
                </p>
              </div>
              <div className="hidden md:block">
                <div className="w-12 h-0.5 bg-[#E94E35]"></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {skills.map(({ name, Icon, color }) => (
              <div key={name} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 p-4 rounded-xl bg-[#1E1E1E] group-hover:bg-[#E94E35]/10 transition-colors duration-300 flex items-center justify-center">
                  <Icon 
                    size={40} 
                    color={color}
                    className="group-hover:scale-110 transition-transform duration-300"
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