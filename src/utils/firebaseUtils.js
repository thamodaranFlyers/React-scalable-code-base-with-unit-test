import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// import Notification from "../components/Notification";
// import { toast } from "react-toastify";
// import NotificationComponent from "../components/NotificationComponent";

const firebaseConfig = {
  apiKey: "AIzaSyCJsXu5MAwzr8ub3FOWiW90x_4Rskm3UpM",
  authDomain: "meat-chop-push-notification.firebaseapp.com",
  projectId: "meat-chop-push-notification",
  storageBucket: "meat-chop-push-notification.appspot.com",
  messagingSenderId: "275132309034",
  appId: "1:275132309034:web:1962542ac57ffd51132d53",
  measurementId: "G-9VSFR2HJWF",
};

const vapidkey =
  "BMJGAAT4HWhINyvUykRuAg0vvBnoHsgblJuK-0h65Xf2JlSmsYv1Gy3U_CRsjUVVXgxlzW-RoMdj6fToRFQ1GWY";

const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);

export const requestFCMToken = async () => {
  return Notification.requestPermission()
    .then((permission) => {
      if (permission === "granted") {
        return getToken(messaging, { vapidkey });
      } else {
        throw new Error("Notification not granted");
      }
    })
    .catch((error) => {
      console.error("Error getting FCM token: ", error);
      throw error;
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload);
      resolve(payload);
      //   return ;
    });
  });
