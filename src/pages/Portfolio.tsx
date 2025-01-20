export function PortfolioPage() {
  const projects = [
    { id: 1, title: 'Sabor Caseiro', image: '/project1.jpg' },
    { id: 2, title: 'Portfolio', image: '/project2.jpg' },
  ];

  return (
    <section id="portfolio" className="min-h-screen flex items-center bg-[#1E1E1E]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-16">Portfolio</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="space-y-4">
              <div className="group relative overflow-hidden rounded-lg">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-[300px] object-cover transition-transform group-hover:scale-105"
                />
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
  );
} 