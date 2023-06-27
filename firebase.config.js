import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWG_rKUsLRroUVXbbprSB1JwN7HOtfP6A",
  authDomain: "first-react-web-application.firebaseapp.com",
  projectId: "first-react-web-application",
  storageBucket: "first-react-web-application.appspot.com",
  messagingSenderId: "613247843741",
  appId: "1:613247843741:web:0846e5821ee84ee2570374"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);