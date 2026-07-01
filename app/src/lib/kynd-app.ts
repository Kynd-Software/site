import { initializeApp, getApps, getApp } from 'firebase/app';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import type { Firestore } from 'firebase/firestore';

const KYND_APP_CONFIG = {
  apiKey: 'AIzaSyDDR8Ytynak3zIjSxdGkL8mLtBAk4g0_oA',
  authDomain: 'kynd-8cfac.firebaseapp.com',
  projectId: 'kynd-8cfac',
  storageBucket: 'kynd-8cfac.firebasestorage.app',
  messagingSenderId: '43653880612',
  appId: '1:43653880612:web:905711cc3edabec8d471b1',
};

const APP_NAME = 'kynd-app';

let db: Firestore | null = null;

const getKyndDb = (): Firestore => {
  if (db) return db;

  const existingApp = getApps().find((a) => a.name === APP_NAME);
  const app = existingApp ?? initializeApp(KYND_APP_CONFIG, APP_NAME);
  db = getFirestore(app);
  return db;
};

export interface InviteData {
  fromName: string;
  recipientName: string;
  role: string;
  code: string;
  status: string;
}

export const fetchInvite = async (inviteId: string): Promise<InviteData | null> => {
  try {
    const firestore = getKyndDb();
    const docRef = doc(firestore, 'invites', inviteId);
    const snap = await getDoc(docRef);

    if (!snap.exists()) return null;

    return snap.data() as InviteData;
  } catch (err) {
    console.error('Error fetching invite:', err);
    return null;
  }
};
