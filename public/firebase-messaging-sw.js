importScripts("https://www.gstatic.com/firebasejs/9.20.0/firebase-app-compat.js")
importScripts("https://www.gstatic.com/firebasejs/9.20.0/firebase-messaging-compat.js")


const firebaseConfig = {
  apiKey: "AIzaSyB-uuhhv9P38LmQp7csqAA-1yLwOhvmvS0",
  authDomain: "notificacio-push.firebaseapp.com",
  projectId: "notificacio-push",
  storageBucket: "notificacio-push.appspot.com",
  messagingSenderId: "277036843228",
  appId: "1:277036843228:web:580eded1affa3f79713419",
  measurementId: "G-WSSPE5X8PV"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app);

messaging.onBackgroundMessage(payload=>{
    console.log("Recibiste un mensaje mientras estabas ausente");
    console.log(payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: "./logo192.png"
    };

    return self.registration.showNotification(
        notificationTitle,
        notificationOptions
    )
})