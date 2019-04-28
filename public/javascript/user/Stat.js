firebase.auth().onAuthStateChanged(firebaseUser => {
	if(firebaseUser) {
		//window.href = Router.LoggedIn(false, false);
	}
	else {
	//user not logged in, make them
		window.href = "index.html";
	}
});
