import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/analytics";

const firebaseConfig = {
    apiKey: process.env.GOBUY_APP_API_KEY,
    authDomain: process.env.GOBUY_APP_AUTH_DOMAIN,
    projectId: process.env.GOBUY_APP_PROJECT_ID,
    storageBucket: process.env.GOBUY_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.GOBUY_APP_MESSAING_SENDER_ID,
    appId: process.env.GOBUY_APP_APP_ID,
    measurementId: process.env.GOBUY_APP_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
