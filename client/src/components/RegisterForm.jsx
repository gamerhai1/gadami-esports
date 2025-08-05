import React, { useState } from 'react';

const RegisterForm = ({ onSubmit }) => {
  const [uid, setUid] = useState('');
  const [ign, setIgn] = useState('');
  const [upi, setUpi] = useState('');
  const [terms, setTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (terms) {
      onSubmit({ uid, ign, upi });
    } else {
      alert('Please accept terms');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <input
        type="text"
        placeholder="Free Fire UID"
        value={uid}
        onChange={(e) => setUid(e.target.value)}
        className="block w-full mb-4 p-2 border"
        required
      />
      <input
        type="text"
        placeholder="In-game Name (IGN)"
        value={ign}
        onChange={(e) => setIgn(e.target.value)}
        className="block w-full mb-4 p-2 border"
        required
      />
      <input
        type="text"
        placeholder="UPI ID"
        value={upi}
        onChange={(e) => setUpi(e.target.value)}
        className="block w-full mb-4 p-2 border"
        required
      />
      <label className="flex items-center mb-4">
        <input type="checkbox" checked={terms} onChange={(e) => setTerms(e.target.checked)} />
        <span className="ml-2">I accept the terms and conditions</span>
      </label>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
