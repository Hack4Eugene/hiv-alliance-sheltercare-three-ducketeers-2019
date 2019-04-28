firebase.auth().onAuthStateChanged(firebaseUser => {
	if(!firebaseUser) 
	{
		//user not logged in, make them
		window.location = "index.html";
	}
});
