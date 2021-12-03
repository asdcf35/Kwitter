function makeid(length) 
{
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
}
return result;
}

function profilePic(){
img = document.getElementById('profilePic');
mpx = makeid(11);
img.src=`https://avatars.dicebear.com/api/bottts/${mpx}.svg`;
}
var firebaseConfig = {
    apiKey: "AIzaSyC9yGzV0lX6VOR9UWcNypekT9mr4d7KLmU",
    authDomain: "kwitter-5c790.firebaseapp.com",
    databaseURL: "https://kwitter-5c790-default-rtdb.firebaseio.com",
    projectId: "kwitter-5c790",
    storageBucket: "kwitter-5c790.appspot.com",
    messagingSenderId: "520446487724",
    appId: "1:520446487724:web:48b2162a3bff7cca594309"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

function aRoom(){
    userName = document.getElementById("rName").value;
    
}