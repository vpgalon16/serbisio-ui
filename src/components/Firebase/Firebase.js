//Project Firebase connection
//https://cz-blog-posts-default-rtdb.firebaseio.com/
//cz-blog-posts-default-rtdb: null

import firebase from "firebase";
//import "firebase/database";

// var firebaseConfig = {
//     apiKey: "AIzaSyDYfDLiIij0yA7KwjVCzBfpzJ6_9vr-FNk",
//     authDomain: "cz-blog-posts.firebaseapp.com",
//     databaseURL: "https://cz-blog-posts-default-rtdb.firebaseio.com",
//     projectId: "cz-blog-posts",
//     storageBucket: "cz-blog-posts.appspot.com",
//     messagingSenderId: "3714469524",
//     appId: "1:3714469524:web:2a5070ab6d93d4cbe02e81",
//     measurementId: "G-8L92L3DF2Q"
// };
const firebaseConfig = {
    apiKey: "AIzaSyDhxOltcB4CoK_FFKBtWgfeGDIziOdop74",
    authDomain: "academic-aloe-350007.firebaseapp.com",
    projectId: "academic-aloe-350007",
    storageBucket: "academic-aloe-350007.appspot.com",
    messagingSenderId: "376509102672",
    appId: "1:376509102672:web:092b70e50cc17957d7ef55",
    measurementId: "G-X9RTC0L030"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

//export default firebase;
export default firebase.database();