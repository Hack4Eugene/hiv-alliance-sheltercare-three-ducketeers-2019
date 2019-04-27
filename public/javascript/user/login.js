function validateData() {
        if (!firebase.auth().currentUser) {
                // [START createprovider]
                var provider = new firebase.auth.GoogleAuthProvider();
                // [END createprovider]
                // [START addscopes]
                provider.addScope('https://www.googleapis.com/auth/calendar');
                // [END addscopes]
                // [START signin]
                var signedInUser = firebase.auth().signInWithPopup(provider);
		console.log(signedInUser);
                signedInUser.then(function(result) {
                        // This gives you a Google Access Token. You can use it to access the Google API.
                        var token = result.credential.accessToken;
                        // The signed-in user info.
                        var user = result.user;
                        console.log("User Info\n "+user);
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
}

