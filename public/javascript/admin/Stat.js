firebase.auth().onAuthStateChanged(firebaseUser => {
	if(!firebaseUser) 
	{
	//user not logged in, make them
		document.window.href = "index.html";
	}
});
