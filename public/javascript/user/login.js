function SignInAdmin()
{
	window.location = "AdminSignIn.html";
}
function SignInUser()
{
	window.location = "UserSignIn.html";
}

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



