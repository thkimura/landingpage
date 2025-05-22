import { useState } from 'react';

export function PortfolioPage() {
  const [modalVideo, setModalVideo] = useState<string | null>(null);
  // Estado para controlar o slide atual de cada projeto
  const [carouselIndexes, setCarouselIndexes] = useState<{ [key: number]: number }>({});

  const projects = [
    { id: 1, title: 'Sabor Caseiro', images: [
      './public/models/project1.jpg',
      './public/models/project1_2.jpg',
      './public/models/project1_3.jpg',
    ] },
    { id: 2, title: 'Barber Shop', images: [
      './public/models/project2.jpg',
      './public/models/project2_2.jpg',
      './public/models/project2_3.jpg',
    ] },
    { id: 3, video: './public/models/websaborcaseiro.mp4' },
    { id: 4, video: './public/models/barbershop.mp4' },
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
    <section id="barber-shop" className="min-h-screen flex items-center bg-[#1E1E1E]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-16">Barber Shop</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="space-y-4">
              <div className="group relative overflow-hidden rounded-lg">
                {project.images ? (
                  <div className="relative w-full h-[300px] flex items-center justify-center bg-black">
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
                      className="w-full h-[300px] object-cover transition-transform group-hover:scale-105"
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
                ) : project.video ? (
                  <div onClick={() => setModalVideo(project.video)} className="cursor-pointer">
                    <video 
                      src={project.video} 
                      className="w-full h-[300px] object-cover transition-transform group-hover:scale-105 bg-black" 
                      muted
                      playsInline
                      preload="metadata"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg width="60" height="60" viewBox="0 0 24 24" fill="#fff"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                ) : null}
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
      {/* Modal de vídeo */}
      {modalVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={() => setModalVideo(null)}>
          <div className="relative max-w-2xl w-full px-4" onClick={e => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-white text-3xl font-bold z-10" onClick={() => setModalVideo(null)}>&times;</button>
            <video src={modalVideo} controls autoPlay className="w-full rounded-lg bg-black" />
          </div>
        </div>
      )}
    </section>
  );
} 