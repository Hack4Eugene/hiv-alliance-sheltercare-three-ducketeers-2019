firebase.auth().onAuthStateChanged(firebaseUser => {
	if(!firebaseUser) {
	//if user logs out, or isnt logged in, redirect them
		toLogin();
	}
});
