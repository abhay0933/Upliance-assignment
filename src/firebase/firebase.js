import {getApp,getApps,initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCOYWNYlakvz82WTC45db6Yp50Ch7yrIc8",
  authDomain: "upliance-d961a.firebaseapp.com",
  projectId: "upliance-d961a",
  storageBucket: "upliance-d961a.appspot.com",
  messagingSenderId: "257842931609",
  appId: "1:257842931609:web:dead1fdbf3f69f72629508",
  measurementId: "G-VP0MEPPBP2"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db= getFirestore(app);

export {app, auth, db};