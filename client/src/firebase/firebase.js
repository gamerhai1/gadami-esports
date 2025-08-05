import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, arrayUnion, Timestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addMatch = async (matchData) => {
  await addDoc(collection(db, 'matches'), {
    ...matchData,
    joinedPlayers: [],
    startTime: Timestamp.fromDate(new Date(matchData.startTime)),
    createdAt: Timestamp.now(),
  });
};

export const getMatches = async () => {
  const querySnapshot = await getDocs(collection(db, 'matches'));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const joinMatch = async (matchId, playerData) => {
  const matchRef = doc(db, 'matches', matchId);
  await updateDoc(matchRef, {
    joinedPlayers: arrayUnion(playerData),
  });
};

export const getLeaderboard = async () => {
  const querySnapshot = await getDocs(collection(db, 'leaderboard'));
  return querySnapshot.docs.map((doc) => doc.data());
};

export { db };
