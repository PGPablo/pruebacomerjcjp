import firebase from 'firebase'
import 'firebase/storage'
import * as firebaseui from 'firebaseui'

const config = {
    apiKey: "AIzaSyCBHHu_zkJKoofWzEDZokyOqZNPnSqSCKA",
    authDomain: "comerjcjp-db.firebaseapp.com",
    databaseURL: "https://comerjcjp-db.firebaseio.com",
    projectId: "comerjcjp-db",
    storageBucket: "comerjcjp-db.appspot.com",
    messagingSenderId: "819063099675",
    appId: "1:819063099675:web:a4e9a2d1a041dd300ec3be"
  };

const uiConfig = {
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    signInSuccessUrl: '/dashboard',
    credentialHelper: "none",
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const db = firebase.firestore()
export const storage = firebase.storage()

export const startUi = (elementId) => {
    const ui = new firebaseui.auth.AuthUI(auth)
    ui.start(elementId, uiConfig)
}