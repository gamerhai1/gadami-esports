export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0f1a] flex flex-col items-center justify-center text-cyan-400 px-4">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide text-center drop-shadow-[0_0_8px_#00ffff]">
        GADAMI <span className="text-cyan-500">eSPORTS</span>
      </h1>

      <div className="bg-[#101828] mt-10 p-6 rounded-2xl w-full max-w-md shadow-lg shadow-cyan-500/20">
        <input
          type="text"
          placeholder="Enter UID"
          className="w-full mb-4 p-3 rounded-lg bg-[#0b0f1a] border border-cyan-500 text-white placeholder-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <input
          type="text"
          placeholder="Enter In-Game Name"
          className="w-full mb-4 p-3 rounded-lg bg-[#0b0f1a] border border-cyan-500 text-white placeholder-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 rounded-lg text-lg tracking-wider shadow-md shadow-cyan-500/30 transition-all duration-300">
          JOIN TOURNAMENT
        </button>
      </div>
    </div>
  )
}
