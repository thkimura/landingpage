import { useState } from 'react';

export function PortfolioPage() {
  const [carouselIndexes, setCarouselIndexes] = useState<{ [key: number]: number }>({});

  const projects = [
    {
      id: 1,
      title: 'Sabor Caseiro',
      images: [
        '/models/project1.jpg',
        '/models/project1_2.jpg',
        '/models/project1_3.jpg',
      ],
    },
    {
      id: 2,
      title: 'Barber Shop',
      images: [
        '/models/project2.jpg',
        '/models/project2_2.jpg',
        '/models/project2_3.jpg',
      ],
    },
  ];

  // Função para trocar slide
  const handlePrev = (id: number, imagesLength: number) => {
    setCarouselIndexes((prev) => ({
      ...prev,
      [id]: prev[id] ? (prev[id] - 1 + imagesLength) % imagesLength : imagesLength - 1,
    }));
  };
  const handleNext = (id: number, imagesLength: number) => {
    setCarouselIndexes((prev) => ({
      ...prev,
      [id]: prev[id] ? (prev[id] + 1) % imagesLength : 1,
    }));
  };

  return (
    <div className="relative w-full">
      <section id="portfolio" className="min-h-screen flex items-center bg-[#1E1E1E]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-16">Portfolio</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="space-y-4">
                <div className="group relative overflow-hidden rounded-lg">
                  <div className="relative w-full flex items-center justify-center bg-black" style={{ height: 500 }}>
                    <button
                      className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-[#E94E35] text-white rounded-full p-2 hover:bg-[#c43a23] transition"
                      onClick={() => handlePrev(project.id, project.images.length)}
                      aria-label="Anterior"
                    >
                      &#8592;
                    </button>
                    <img
                      src={project.images[carouselIndexes[project.id] || 0]}
                      alt={project.title}
                      className="object-cover transition-transform group-hover:scale-105 rounded-lg mx-auto"
                    />
                    <button
                      className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-[#E94E35] text-white rounded-full p-2 hover:bg-[#c43a23] transition"
                      onClick={() => handleNext(project.id, project.images.length)}
                      aria-label="Próximo"
                    >
                      &#8594;
                    </button>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                      {project.images.map((_, idx) => (
                        <span
                          key={idx}
                          className={`inline-block w-2 h-2 rounded-full ${idx === (carouselIndexes[project.id] || 0) ? 'bg-[#E94E35]' : 'bg-white/30'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-0.5 bg-[#E94E35]"></div>
                  <h3 className="text-white text-xl">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Seta para descer */}
      <div className="w-full hidden md:flex justify-center absolute left-0 bottom-8 z-10">
        <a href="#contact" className="animate-bounce text-[#E94E35]">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  );
} 