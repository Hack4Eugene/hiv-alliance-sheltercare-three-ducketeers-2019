function validateData() {
	console.log("signing in");
	if(firebase.auth().currentUser != null)
	{
		firebase.auth().signOut(); 
		console.log("signed out");
	}
        if (!firebase.auth().currentUser) {
                // [START createprovider]
                var provider = new firebase.auth.GoogleAuthProvider();
                // [END createprovider]
                // [START addscopes]
                provider.addScope('https://www.googleapis.com/auth/calendar');
                // [END addscopes]
                // [START signin]
                var signedInUser = firebase.auth().signInWithPopup(provider);
                signedInUser.then(function(result) {
                        // This gives you a Google Access Token. You can use it to access the Google API.
                        var token = result.credential.accessToken;
                        // The signed-in user info.
                        var user = result.user;
			console.log("signed in:");
			console.log(signedInUser);
			console.log(firebase.auth().currentUser);
			console.log(firebase.auth().currentUser.email);
                        // [START_EXCLUDE]
                        console.log("GOOGLE TOKEN\n")
                        console.log(token);

                        // [END_EXCLUDE]
                }).catch(function(error) {
                        // Handle Errors here.
                        var errorCode = error.code;
                        // [START_EXCLUDE]
                        if (errorCode === 'auth/popup-closed-by-user') {
                                console.log(error);
                        } else {
                                alert(error);
                        }   
                        // [END_EXCLUDE]
                }); 
                // [END signin]
        }   
	//check to make sure given gmail is a valid user
	console.log("ensuring valid user is logged in");
	var db = firebase.database().ref();
	var inStr = '/encounterUsers/'+firebase.auth().currentUser.email;
	console.log("database query:"+inStr);
	db.child(inStr).once('value').then(function(snapshot) {
		if(snapshot.val())
	});
}

