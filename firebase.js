// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAfk6qIC8iXavjS4agQWJrEIfoHFvFMZnc',
  authDomain: 'somewhat-social.firebaseapp.com',
  projectId: 'somewhat-social',
  storageBucket: 'somewhat-social.appspot.com',
  messagingSenderId: '389438946439',
  appId: '1:389438946439:web:b53892041a784556214c22',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
