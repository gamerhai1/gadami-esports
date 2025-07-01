import React, { useState } from 'react';

export default function App() {
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
    <div className="min-h-screen flex flex-col items-center justify-center text-white px-4 text-center">
      <h1 className="text-6xl font-bold text-[#00f2ff] drop-shadow animate-pulse tracking-widest mb-2">GADAMI</h1>
      <h2 className="text-2xl text-[#00f2ff] tracking-wide mb-6 uppercase">eSPORTS</h2>

      <form onSubmit={handleSubmit} className="bg-[#141d2b] p-6 rounded-xl shadow-lg w-full max-w-sm space-y-4 border border-[#00f2ff]">
        <input
          className="w-full p-3 rounded bg-transparent border border-[#00f2ff] text-white placeholder:text-[#888]"
          placeholder="Enter UID"
          value={uid}
          onChange={(e) => setUid(e.target.value)}
          required
        />
        <input
          className="w-full p-3 rounded bg-transparent border border-[#00f2ff] text-white placeholder:text-[#888]"
          placeholder="Enter In-Game Name"
          value={ign}
          onChange={(e) => setIgn(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full p-3 bg-[#00f2ff] text-black font-bold rounded hover:bg-[#00e6ff] transition uppercase tracking-wide"
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
