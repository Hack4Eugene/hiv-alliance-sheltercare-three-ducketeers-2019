firebase.auth().onAuthStateChanged(firebaseUser => {
	if(firebaseUser) {
		//check to make sure given gmail is a valid user
        	var db = firebase.database().ref();
        	var inStr = '/encounterAdmins/'+parseString(firebase.auth().currentUser.email);
        	console.log("database query: "+inStr);
        	db.child(inStr).once('value').then(function(snapshot) {
                	if(snapshot.exists())
                	{
				window.location = "AdminPortal.html";
                	}       
                	else
                	{
                	        alert("Invalid email detected, if this is incorrect, contact your system administrator");
                	        firebase.auth().signOut();
                	}
		});
	}
	else {
	//user not logged in, make them
		window.href = "index.html";
	}
});
