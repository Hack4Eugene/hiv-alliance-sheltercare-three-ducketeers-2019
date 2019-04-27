firebase.auth().onAuthStateChanged(firebaseUser => {
	if(firebaseUser) {
		UpdatePage();	//javascript/group/ViewGroup.js reads group key and customizes page
	}
	else
	{
	//if user logs out, or isnt logged in, redirect them
		toLogin();
	}
});
