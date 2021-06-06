/** @format */

import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyCMGusR7BYNwaw9a-2wqI4w093fwJib4vs",
	authDomain: "whatsapp-clone-pwj.firebaseapp.com",
	projectId: "whatsapp-clone-pwj",
	storageBucket: "whatsapp-clone-pwj.appspot.com",
	messagingSenderId: "813923061860",
	appId: "1:813923061860:web:191f4718c8eea922950f71",
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
