export default function Home() {
  return (
    <div className="min-h-screen bg-black text-[#00ffcc] font-mono p-6 md:p-12 border-8 border-[#ff007f] relative overflow-hidden">
      
      {/* Efek Garis Glitch di Latar Belakang */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none"></div>

      {/* HEADER: Identitas Utama */}
      <header className="relative z-10 border-b-2 border-[#00ffcc] pb-6 mb-8 text-center md:text-left">
        <div className="inline-block bg-[#ff007f] text-black font-black px-3 py-1 text-xs uppercase tracking-widest mb-3 animate-pulse">
          // SYSTEM OVERRIDE ACTIVE //
        </div>
        <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-white drop-shadow-[0_0_10px_#ff007f]">
          Muhammad Multazam Al Ghazali
        </h1>
        <p className="text-xl mt-2 text-[#00ffcc] font-bold uppercase tracking-wider">
          CORE ROLE: <span className="text-yellow-400">&gt; AI ARCHITECTURE_</span>
        </p>
      </header>

      {/* MAIN CONTENT: Informasi CV */}
      <main className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Kotak 1: Keahlian Utama */}
        <section className="border border-[#00ffcc] p-6 bg-zinc-950 rounded-none shadow-[5px_5px_0px_0px_#00ffcc]">
          <h2 className="text-xl font-bold mb-4 text-[#ff007f] tracking-widest uppercase">
            [01] CORE_SKILLS.exe
          </h2>
          <ul className="space-y-3 text-sm md:text-base">
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2">&gt;</span>
              <div>
                <strong className="text-white">Ethical Hacking:</strong> Menguji & mengamankan celah keamanan sistem (White Hat Hacker).
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2">&gt;</span>
              <div>
                <strong className="text-white">AI Architecture:</strong> Merancang jaringan saraf tiruan & kecerdasan sistem AI.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2">&gt;</span>
              <div>
                <strong className="text-white">Web Development:</strong> Membangun platform digital berbasis Next.js & React.
              </div>
            </li>
          </ul>
        </section>

        {/* Kotak 2: Status Sistem / Pengalaman */}
        <section className="border border-[#ff007f] p-6 bg-zinc-950 rounded-none shadow-[5px_5px_0px_0px_#ff007f]">
          <h2 className="text-xl font-bold mb-4 text-[#00ffcc] tracking-widest uppercase">
            [02] SYSTEM_STATUS.log
          </h2>
          <div className="space-y-3 font-mono text-xs md:text-sm text-zinc-400">
            <p><span className="text-white font-bold">[ONLINE]</span> Node.js Compiler: Active</p>
            <p><span className="text-white font-bold">[STATUS]</span> Database Syncing: 100%</p>
            <p><span className="text-white font-bold">[MISSION]</span> Menerobos batasan teknologi AI dan mengamankan jaringan global.</p>
            <div className="mt-4 p-2 bg-zinc-900 border border-zinc-800 text-center text-[#ff007f] font-bold animate-pulse">
              ACCESS GRANTED
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="relative z-10 mt-12 text-center text-xs text-zinc-600 border-t border-zinc-900 pt-4">
        &copy; 2026 MULTAZAM_AL_GHAZALI. ALL RIGHTS RESERVED.
      </footer>

    </div>
  );
}