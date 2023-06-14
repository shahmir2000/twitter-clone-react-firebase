// import * as admin from 'firebase-admin';

// admin.initializeApp();

// export * from './normalize-stats';
// export * from './notify-email';
import * as admin from 'firebase-admin';
import { getFirebaseConfig } from '../../src/lib/firebase/config';

const firebaseConfig = getFirebaseConfig();

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  ...firebaseConfig
});

export * from './normalize-stats';
export * from './notify-email';
