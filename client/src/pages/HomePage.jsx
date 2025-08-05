import React, { useState, useEffect } from 'react';
import RegisterForm from '../components/RegisterForm';
import MatchCard from '../components/MatchCard';
import { getMatches } from '../firebase/firebase';

const HomePage = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [user, setUser] = useState(null);
  const [matches, setMatches] = useState([]);

  const handleRegister = (userData) => {
    setUser(userData);
    setIsRegistered(true);
    fetchMatches();
  };

  const fetchMatches = async () => {
    const data = await getMatches();
    setMatches(data);
  };

  useEffect(() => {
    if (isRegistered) {
      fetchMatches();
    }
  }, [isRegistered]);

  return (
    <div className="container mx-auto p-4 pt-12">
      {!isRegistered ? (
        <RegisterForm onSubmit={handleRegister} />
      ) : (
        <div>
          <h1 className="text-2xl font-bold mb-4">Today&apos;s Matches</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {matches.map((match) => (
              <MatchCard key={match.id} match={match} user={user} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
