import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB32J8jKE5vBcJKF-OzUI0KpCdSq_YaAoc",
  authDomain: "wingu-challenge-database-e2d4d.firebaseapp.com",
  databaseURL: `https://wingu-challenge-database-e2d4d-default-rtdb.firebaseio.com`,
  projectId: "wingu-challenge-database-e2d4d",
  storageBucket: "wingu-challenge-database-e2d4d.appspot.com",
  messagingSenderId: "576967591111",
  appId: "1:576967591111:web:d4a5f49a25c7d2a19feae2"
};

const defaultProject = initializeApp(firebaseConfig)

export const db = getDatabase(defaultProject);

export const store = getStorage(defaultProject);



