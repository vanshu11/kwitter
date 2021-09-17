
var firebaseConfig = {
      apiKey: "AIzaSyAztftK5dRjHD7JaV3PS4V8QUkzpts5_CU",
      authDomain: "testclass-d63db.firebaseapp.com",
      databaseURL: "https://testclass-d63db-default-rtdb.firebaseio.com",
      projectId: "testclass-d63db",
      storageBucket: "testclass-d63db.appspot.com",
      messagingSenderId: "598566410970",
      appId: "1:598566410970:web:afda9087732a86ee21e3e3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome " + user_name + "!";

    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({purpose : "adding room name"});
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }
    

    



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row="<div class='room_name' id=" + Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div> <hr>";
      document.getElementById("output").innerHTML+=row;



      //End code
      });});}

      function redirectToRoomName(name){
            console.log(name);
            localStorage.setItem("room_name" ,name);
            window.location="kwitter_page_html";
             
      }



getData();



