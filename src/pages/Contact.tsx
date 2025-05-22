export function ContactPage() {
  return (
    <div className="relative w-full">
      <section id="contact" className="min-h-screen flex items-center bg-[#E94E35]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="md:w-1/2">
              <h1 className="text-7xl font-bold text-white mb-4">Contact-me</h1>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-0.5 bg-white"></div>
                <p className="text-white">Let's work together</p>
              </div>
            </div>
            <form className="w-full md:w-1/2 space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded bg-[#1E1E1E] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded bg-[#1E1E1E] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <input
                type="text"
                placeholder="Fone"
                className="w-full p-3 rounded bg-[#1E1E1E] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full p-3 rounded bg-[#1E1E1E] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </form>
          </div>
        </div>
      </section>
      {/* Ícone de check verde com efeito de brilho */}
      <div className="w-full hidden md:flex justify-center absolute left-0 bottom-8 z-10">
        <div className="relative">
          <a href="#home" className="animate-bounce text-[#E94E35]">
            <span className="absolute inset-0 rounded-full animate-pulse-glow bg-green-400 opacity-40 blur-xl"></span>
            <div className="bg-white rounded-full p-2 shadow-lg relative z-10">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#4BB543" strokeWidth="3" fill="none" />
                <path d="M7 13l3 3 7-7" stroke="#4BB543" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </a>
        </div>
      </div>
      <style>{`
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.25); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 1.5s infinite;
        }
      `}</style>
    </div>
  );
} 