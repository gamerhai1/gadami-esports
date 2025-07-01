import React, { useState } from 'react';
import './index.css'; // Tailwind & animation

function App() {
  const [uid, setUid] = useState('');
  const [ign, setIgn] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('https://api.sheetbest.com/sheets/YOUR_API_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ UID: uid, IGN: ign }),
    });
    alert('Registered Successfully!');
    setUid('');
    setIgn('');
  };

  return (
    <div className="min-h-screen bg-[#0f0f23] flex flex-col items-center justify-center text-white font-orbitron px-4" style={{
      backgroundImage: "radial-gradient(circle at top left, rgba(0, 242, 255, 0.05), transparent 60%)",
    }}>
      <h1 className="text-5xl md:text-6xl text-[#00f2ff] font-bold mb-2 drop-shadow-lg animate-pulse">GADAMI</h1>
      <h2 className="text-2xl md:text-3xl text-[#00f2ff] font-semibold mb-6 tracking-widest">eSPORTS</h2>

      <form onSubmit={handleSubmit} className="bg-[#1a1a2e] rounded-2xl p-6 w-full max-w-sm shadow-lg backdrop-blur-md animate-fade-in">
        <input
          type="text"
          placeholder="Enter UID"
          value={uid}
          onChange={(e) => setUid(e.target.value)}
          required
          className="w-full mb-4 p-3 rounded-lg bg-[#0f0f23] text-white placeholder-gray-400 border border-[#00f2ff]"
        />
        <input
          type="text"
          placeholder="Enter In-Game Name"
          value={ign}
          onChange={(e) => setIgn(e.target.value)}
          required
          className="w-full mb-4 p-3 rounded-lg bg-[#0f0f23] text-white placeholder-gray-400 border border-[#00f2ff]"
        />
        <button
          type="submit"
          className="w-full py-3 bg-[#00f2ff] text-black font-bold rounded-lg shadow-lg hover:bg-[#00d4e4] transition-all duration-300 uppercase tracking-wide"
        >
          Join Tournament
        </button>
      </form>

      <p className="mt-6 text-sm text-[#ff2e63] font-semibold animate-bounce">
        Room ID/Password 1 hour before match
      </p>
    </div>
  );
}

export default App;

