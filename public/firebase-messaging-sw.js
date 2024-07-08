importScripts("https://www.gstatic.com/firebasejs/9.19.1/firebase-app-compat.js")
importScripts("https://www.gstatic.com/firebasejs/9.19.1/firebase-messagin-compat.js")

const firebaseConfig = {
  apiKey: "AIzaSyAX0Mv5HgzxVoLumrpyQzYnirjYLkOYtTU",
  authDomain: "nemilis-522d4.firebaseapp.com",
  databaseURL: "https://nemilis-522d4-default-rtdb.firebaseio.com",
  projectId: "nemilis-522d4",
  storageBucket: "nemilis-522d4.appspot.com",
  messagingSenderId: "772307036289",
  appId: "1:772307036289:web:72206799043f6a2fc1c580",
  measurementId: "G-Z7NNCVFC05"
};

const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.getMessaging(app);

messaging.onBackgroundMessage(payload => {
    console.log("Recibiste un mensaje mientras no estabas");

    const notificacionTitle = payload.notificacion.title;
    const notificacionOptions = {
        body: payload.notificacion.body,
        icon: "../doc.jpg"
    }

    return self.ServiceWorkerRegistration.showNotification(
        notificacionTitle,
        notificacionOptions
    )
})