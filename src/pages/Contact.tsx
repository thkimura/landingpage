export function ContactPage() {
  return (
    <section id="contact" className="min-h-screen flex items-center bg-[#E94E35]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-white mb-4">Contact-me</h2>
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
  );
} 