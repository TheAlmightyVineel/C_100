// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCNdq92swtsuifW3ZklhLEbiUVwcRA1auA",
    authDomain: "kwitter-c6cd5.firebaseapp.com",
    databaseURL: "https://kwitter-c6cd5-default-rtdb.firebaseio.com",
    projectId: "kwitter-c6cd5",
    storageBucket: "kwitter-c6cd5.appspot.com",
    messagingSenderId: "644723745955",
    appId: "1:644723745955:web:ae8d828ea11d10486c0b16"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



