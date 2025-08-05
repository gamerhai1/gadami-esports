import React, { useEffect, useState } from 'react';
import { getLeaderboard } from '../firebase/firebase';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    const fetchLeaders = async () => {
      const data = await getLeaderboard();
      setLeaders(data.sort((a, b) => b.kills - a.kills).slice(0, 10));
    };
    fetchLeaders();
  }, []);

  return (
    <div className="my-8">
      <h2 className="text-xl font-bold mb-4">Leaderboard</h2>
      <ul className="list-decimal pl-6">
        {leaders.map((player, idx) => (
          <li key={idx}>
            {player.ign} - {player.kills} kills - ₹{player.prizes} won
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
