$(document).ready(function(){

  var config = {
    apiKey: "AIzaSyBAUqxD93uN8ntE1meKLeo9lzOwvNSudgs",
    authDomain: "kakule-f22bd.firebaseapp.com",
    databaseURL: "https://kakule-f22bd.firebaseio.com",
    projectId: "kakule-f22bd",
    storageBucket: "kakule-f22bd.appspot.com",
    messagingSenderId: "903596832236"
    };

    firebase.initializeApp(config);


    $("#registerBtn").click(function(){

        var email = $("#email").val();
        var password = $("#password").val();

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function(){

                firebase.auth().signInWithEmailAndPassword(email, password)
                    .then(function(){
                        window.location.href = "index.html";
                    })

            }).catch(function(error){
                alert(error.message);
        })

    })


})
