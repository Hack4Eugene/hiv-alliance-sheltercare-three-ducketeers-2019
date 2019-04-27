firebase.auth().onAuthStateChanged(firebaseUser => {
	if(firebaseUser) {
		document.getElementById("user_logged_in").value = firebaseUser.email;	//store email of current user
		DisplayUsersGroups();	//Display all groups the user is a part of, admin or member
	}
	else {
	//user not logged in, make them
		document.window.href = "index.html";
	}
});
