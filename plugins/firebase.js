import * as firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBqEa6M0NVR7oPJOkQEaqE9JQqEH8JXn6Y",
    authDomain: "nuxt-24a04.firebaseapp.com",
    databaseURL: "https://nuxt-24a04.firebaseio.com",
    projectId: "nuxt-24a04",
    storageBucket: "nuxt-24a04.appspot.com",
    messagingSenderId: "720426044830",
    appId: "1:720426044830:web:84b570f8dab0a574bdda8f"
};

let app = null;

if (!firebase.apps.length)
    app = firebase.initializeApp(firebaseConfig)

export default firebase