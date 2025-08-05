import React, { useState, useEffect } from 'react';
import { joinMatch } from '../firebase/firebase';

const MatchCard = ({ match, user }) => {
  const [showRoom, setShowRoom] = useState(false);
  const [isJoined, setIsJoined] = useState(false);

  useEffect(() => {
    const joined = match.joinedPlayers.some((p) => p.uid === user?.uid);
    setIsJoined(joined);

    const now = new Date();
    const start = match.startTime.toDate();
    if (now >= new Date(start.getTime() - 60 * 60 * 1000) && joined) {
      setShowRoom(true);
    }
  }, [match, user]);

  const handleJoin = () => {
    const loadRazorpay = () => {
      return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
      });
    };

    const displayRazorpay = async () => {
      const res = await loadRazorpay();
      if (!res) {
        alert('Razorpay SDK failed to load');
        return;
      }

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: match.entryFee * 100,
        currency: 'INR',
        name: 'Gadami Esports',
        description: match.title,
        handler: async (response) => {
          console.log('Payment successful:', response);
          await joinMatch(match.id, user);
          setIsJoined(true);
        },
        prefill: {
          name: user.ign,
        },
        theme: { color: '#F37254' },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    };

    displayRazorpay();
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold">{match.title}</h2>
      <p>Start: {match.startTime.toDate().toLocaleTimeString()}</p>
      <p>Players: {match.joinedPlayers.length}/{match.maxPlayers}</p>
      <p>Entry Fee: ₹{match.entryFee}</p>
      <p>Prize Pool: ₹{match.prizePool}</p>
      <p>Reward per Kill: ₹{match.rewardPerKill}</p>
      <p>Mode: {match.mode}</p>
      {isJoined && showRoom && (
        <div>
          <p>Room ID: {match.roomId}</p>
          <p>Password: {match.roomPassword}</p>
        </div>
      )}
      {!isJoined && (
        <button onClick={handleJoin} className="bg-green-500 text-white py-2 px-4 rounded mt-2">
          Join
        </button>
      )}
    </div>
  );
};

export default MatchCard;
