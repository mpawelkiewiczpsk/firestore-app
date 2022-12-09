import { initializeApp } from 'firebase/app';


const firebaseConfig = {
    apiKey: 'AIzaSyCm_vnHi-1CL5mAN8CNeaAtc10LQW-izmo',
    authDomain: 'firestore-wyklad.firebaseapp.com',
    databaseURL: 'https://firestore-wyklad.firebaseio.com',
    projectId: 'firestore-wyklad',
    storageBucket: 'firestore-wyklad.appspot.com',
    appId: '1:875574393455:android:2d063c6cb397c066042b9a'
};


const app = initializeApp(firebaseConfig);


export default app;
