//const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

function CheckOther(){
    var val = $("#issue").val()
    if(val == "other") {
        $("#other_issue").show();
    } 
    else {
        $("#other_issue").hide();
    }

}


$(document).ready(CheckOther)
