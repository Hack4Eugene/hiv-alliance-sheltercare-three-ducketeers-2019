//const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

function CheckOther(val){
    //var val = $("#issueOther").val()
    if(val == "other") {
        $("#other").show();
    } 
    else {
        $("#other").hide();
    }

}


$(document).ready(CheckOther)
