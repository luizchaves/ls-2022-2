import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  getFirestore,
  updateDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_APIKEY,
  authDomain: import.meta.env.VITE_APP_AUTHDOAMIN,
  projectId: import.meta.env.VITE_APP_PROJECTID,
  storageBucket: import.meta.env.VITE_APP_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APP_APPID,
  measurementId: import.meta.env.VITE_APP_MEASUREMENTID,
};

const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const db = getFirestore(app);

export const Firestore = {
  create: async (path, data) => {
    const docRef = collection(db, path);

    return await addDoc(docRef, data);
  },
  read: async (path) => {
    const items = [];

    const docRef = collection(db, path);

    const docs = await getDocs(docRef);

    docs.forEach((doc) => items.push({ ...doc.data(), id: doc.id }));

    return items;
  },
  update: async (path, data, id) => {
    const docRef = doc(db, path, id);

    return await updateDoc(docRef, data);
  },
  remove: async (path, id) => {
    const docRef = doc(db, path, id);

    return await deleteDoc(docRef);
  },
};

export default app;
