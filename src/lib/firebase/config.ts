// const config = {
//   apiKey: process.env.NEXT_PUBLIC_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
// } as const;

// type Config = typeof config;
const config = {
  apiKey: 'AIzaSyA6hR_eaKVb_yKYLdcMydsvie8QzhHZ0Oo',
  authDomain: 'twitter-app-clone-55703.firebaseapp.com',
  projectId: 'twitter-app-clone-55703',
  storageBucket: 'twitter-app-clone-55703.appspot.com',
  messagingSenderId: '877590563200',
  appId: '1:877590563200:web:dde875639c141989609965',
  measurementId: 'G-J3BT92WT7G'
} as const;

type Config = typeof config;

export function getFirebaseConfig(): Config {
  if (Object.values(config).some((value) => !value))
    throw new Error('Firebase config is not set or incomplete');

  return config;
}
