function parseString(inStr)
{
	var ret = inStr.replace(/\./g, "");		//remove all instances of invalid characters
	ret = ret.replace(/#/g, "");
	ret = ret.replace(/\$/g, "");
	ret = ret.replace(/\[/g, "");
	ret = ret.replace(/]/g, "");
	return ret;
}
function validateUser() {
	if(firebase.auth().currentUser != null)
	{
		firebase.auth().signOut(); 
		console.log("signed out");
	}
        if (!firebase.auth().currentUser) {
		console.log("signing in");
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
                        // [START_EXCLUDE]
		//check to make sure given gmail is a valid user
		var db = firebase.database().ref();
		var inStr = '/encounterUsers/'+parseString(firebase.auth().currentUser.email);
		//var inStr = '/encounterUsers/email1';
		console.log("database query: "+inStr);
		db.child(inStr).once('value').then(function(snapshot) {
			if(snapshot.exists())
			{
				console.log("valid user");
			}
			else
			{
				alert("GET OUTTA MEH SWAMP");
				firebase.auth().signOut();
			}
		});
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
}

function validateAdmin() {
	if(firebase.auth().currentUser != null)
	{
		firebase.auth().signOut(); 
		console.log("signed out");
	}
        if (!firebase.auth().currentUser) {
		console.log("signing in");
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
                        // [START_EXCLUDE]
	//check to make sure given gmail is a valid user
	var db = firebase.database().ref();
	var inStr = '/encounterAdmins/'+parseString(firebase.auth().currentUser.email);
	//var inStr = '/encounterUsers/email1';
	console.log("database query: "+inStr);
	db.child(inStr).once('value').then(function(snapshot) {
		if(snapshot.exists())
		{
			console.log("valid user");
			document.window.href = "AdminPortal.html";
		}
		else
		{
			alert("GET OUTTA MEH SWAMP");
			firebase.auth().signOut();
		}
	});
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
}


