// Firebase setup. All values come from environment variables so real
// credentials never get committed to source control.
// See .env.example / README.md for how to fill these in.
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Firestore is only initialized when a projectId is actually configured.
// This lets the app run in local "demo mode" (sample data, no network
// calls) before a real Firebase project is wired up.
export const isFirebaseConfigured = Boolean(firebaseConfig.projectId);

let firestoreInstance = null;

if (isFirebaseConfigured) {
  const app = initializeApp(firebaseConfig);
  firestoreInstance = getFirestore(app);
}

export const db = firestoreInstance;
