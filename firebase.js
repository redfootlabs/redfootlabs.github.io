import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA33fRSo7jBHFh2rpeQkM4yolbNKvKGWBU",
  authDomain: "redfootlabs.firebaseapp.com",
  projectId: "redfootlabs",
  storageBucket: "redfootlabs.appspot.com",
  messagingSenderId: "179051653983",
  appId: "1:179051653983:web:8eef56e325e4413c398d2a",
  measurementId: "G-J8RN9ZH2WV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
