firebase.auth().onAuthStateChanged(firebaseUser => {
	if(firebaseUser) {
 //check to make sure given gmail is a valid user
                var db = firebase.database().ref();
		var parsed = parseString(firebase.auth().currentUser.email);
                var inStr = '/encounterUsers/'+parsed;
                db.child(inStr).once('value').then(function(snapshot) {
                       	if(snapshot.exists())
                       	{       
				window.location = "form.html";
                       	}
                       	else    
                       	{       
                       	        alert("Invalid email detected. If this is incorrect, contact your system administrator");
                       	}
               	});
	}
});
