/**
 * Created by idanhahn on 1/13/2017.
 */

function initFireBase(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBpVwyOPWTqN3GNvP9e25_VF--Ha58MdDM",
    authDomain: "cancer-mvp.firebaseapp.com",
    databaseURL: "https://cancer-mvp.firebaseio.com",
    storageBucket: "cancer-mvp.appspot.com",
    messagingSenderId: "720121103521"
  };
  firebase.initializeApp(config);
  console.log("Init firebase")

}
