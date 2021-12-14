


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC9yGzV0lX6VOR9UWcNypekT9mr4d7KLmU",
    authDomain: "kwitter-5c790.firebaseapp.com",
    databaseURL: "https://kwitter-5c790-default-rtdb.firebaseio.com",
    projectId: "kwitter-5c790",
    storageBucket: "kwitter-5c790.appspot.com",
    messagingSenderId: "520446487724",
    appId: "1:520446487724:web:48b2162a3bff7cca594309"
};

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    room_name = localStorage.getItem("Roomname");
    user_name = localStorage.getItem("Username");

    console.log("room name "+room_name);
    console.log("user name "+user_name);

    function logout() {
          localStorage.removeItem("Roomname");
          localStorage.removeItem("Username");
          window.location.replace("index.html");
    }
    function send() {
          msg = document.getElementById("msg").value;
          console.log("Message "+msg);
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0,
                dislike:0
          });
          document.getElementById("msg").value = "";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      
//End code
      } });  }); }
getData();
