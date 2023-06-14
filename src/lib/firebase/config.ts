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
  apiKey: 'AIzaSyCnZZUhP4kTGUiQi3zM7Fa3LbAVIRzKvOU',
  authDomain: 'tweet-19a9d.firebaseapp.com',
  projectId: 'tweet-19a9d',
  storageBucket: 'tweet-19a9d.appspot.com',
  messagingSenderId: '456256553730',
  appId: '1:456256553730:web:f86596165d79d3fb15781b',
  measurementId: 'G-1W0L48L9K0'
} as const;

type Config = typeof config;

export function getFirebaseConfig(): Config {
  if (Object.values(config).some((value) => !value))
    throw new Error('Firebase config is not set or incomplete');

  return config;
}
