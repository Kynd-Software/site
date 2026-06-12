import { getApps, initializeApp } from 'firebase/app';
import type { FirebaseApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import type { Firestore } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';
import type { Analytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const missingFirebaseVars = Object.entries(firebaseConfig)
  .filter(([key, value]) => !value && key !== 'measurementId')
  .map(([key]) => key);

let app: FirebaseApp | null = null;
let db: Firestore | null = null;
let analytics: Analytics | null = null;

const getFirebaseApp = (): FirebaseApp => {
  if (missingFirebaseVars.length > 0) {
    throw new Error(`Missing Firebase environment variables: ${missingFirebaseVars.join(', ')}`);
  }

  if (app) {
    return app;
  }

  app = getApps()[0] ?? initializeApp(firebaseConfig);
  return app;
};

export const getDb = (): Firestore => {
  if (db) {
    return db;
  }

  db = getFirestore(getFirebaseApp());
  return db;
};

export const initAnalytics = async (): Promise<Analytics | null> => {
  if (analytics) return analytics;

  const supported = await isSupported();
  if (!supported) return null;

  analytics = getAnalytics(getFirebaseApp());
  return analytics;
};
