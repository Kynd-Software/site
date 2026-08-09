import { initializeApp, getApps } from 'firebase/app';
import { getFunctions, httpsCallable } from 'firebase/functions';
import type { Functions } from 'firebase/functions';

const KYND_APP_CONFIG = {
  apiKey: 'AIzaSyDDR8Ytynak3zIjSxdGkL8mLtBAk4g0_oA',
  authDomain: 'kynd-8cfac.firebaseapp.com',
  projectId: 'kynd-8cfac',
  storageBucket: 'kynd-8cfac.firebasestorage.app',
  messagingSenderId: '43653880612',
  appId: '1:43653880612:web:905711cc3edabec8d471b1',
};

const APP_NAME = 'kynd-app';

let fns: Functions | null = null;

const getKyndFunctions = (): Functions => {
  if (fns) return fns;

  const existingApp = getApps().find((a) => a.name === APP_NAME);
  const app = existingApp ?? initializeApp(KYND_APP_CONFIG, APP_NAME);
  fns = getFunctions(app, 'europe-west2');
  return fns;
};

export interface ValidateInviteResult {
  valid: boolean;
  reason?: string;
  inviterName?: string;
  recipientName?: string;
  accessScope?: string;
  deliveryType?: string;
}

export const validateInviteToken = async (token: string): Promise<ValidateInviteResult> => {
  try {
    const functions = getKyndFunctions();
    const validateFn = httpsCallable<{ token: string }, ValidateInviteResult>(
      functions,
      'validateSecureInvite'
    );
    const result = await validateFn({ token });
    return result.data;
  } catch (err) {
    console.error('Error validating invite:', err);
    return { valid: false, reason: 'error' };
  }
};
