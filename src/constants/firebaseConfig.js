import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD4u90Mh2lzKObhSyaioJ7Knxap9WTXCfY',
  authDomain: 'carbografitos.firebaseapp.com',
  projectId: 'carbografitos',
  storageBucket: 'carbografitos.appspot.com',
  messagingSenderId: '258567431172',
  appId: '1:258567431172:web:3f87e04b22313361750151',
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const authSession = getAuth(app);
export const firestore = getFirestore(app);