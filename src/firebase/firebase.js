import firebase from 'firebase/app';

  // Initialize Firebase
  const prodConfig = {
    apiKey: "AIzaSyDSytId1jbULDKhQUXClpguev5lqWdxe1Q",
    authDomain: "fotogalr.firebaseapp.com",
    databaseURL: "https://fotogalr.firebaseio.com",
    projectId: "fotogalr",
    storageBucket: "fotogalr.appspot.com",
    messagingSenderId: "234594651934"
  };

  const devConfig = {
    apiKey: "AIzaSyDSytId1jbULDKhQUXClpguev5lqWdxe1Q",
    authDomain: "fotogalr.firebaseapp.com",
    databaseURL: "https://fotogalr.firebaseio.com",
    projectId: "fotogalr",
    storageBucket: "fotogalr.appspot.com",
    messagingSenderId: "234594651934"
  };

  if(!firebase.apps.length) {
      firebase.initializeApp(config);
  }

  const config = process.env.NODE_ENV === 'production' ? 
                                            prodConfig
                                            : devConfig;


  const auth = firebase.auth();

  export {
      auth,
  };