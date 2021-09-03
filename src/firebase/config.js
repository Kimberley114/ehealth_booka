// import { initializeApp }  from "firebase/app";
import firebase  from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDjcVIzqq72-5496PsuoPIEGxHhUAp-ZnQ",
  authDomain: "booka-ehealth.firebaseapp.com",
  databaseURL: "https://booka-ehealth-default-rtdb.firebaseio.com",
  projectId: "booka-ehealth",
  storageBucket: "booka-ehealth.appspot.com",
  messagingSenderId: "594382871684",
  appId: "1:594382871684:web:400332fc58b9310de2b6d1",
  measurementId: "G-11RSTS24MR"

};

firebase.initializeApp(firebaseConfig)
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }