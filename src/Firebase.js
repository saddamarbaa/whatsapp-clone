/** @format */

import firebase from "firebase";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAIN_SENDER_ID,
	appId: process.env.REACT_APP_APPID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;

// https://whatsapp-clone-pwj.web.app/
// https://whatsapp-clone-pwj.firebaseapp.com/

// lattes
// https://whatsapp-clone-pwj.web.app

// https://whatsapp-clone-pwj.web.app/

//  https://whatsapp-clone-pwj.web.app
