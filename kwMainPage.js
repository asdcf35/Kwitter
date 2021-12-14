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

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;

           firebase.database().ref("/").child(room_name).update({
                purpose: "Adding Room Name"
          });
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
          console.log("room_name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
          document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();
function redirectToroomname(name){
    console.log(name);
    localStorage.setItem("Roomname",name);
    window.location = "kwitter_page.html";
}
function logout() {
    localStorage.removeItem("Username");
    localStorage.removeItem("Roomname");
    window.location = "index.html";
}