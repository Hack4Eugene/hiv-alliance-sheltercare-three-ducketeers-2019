function LogOut(){
	if(firebase.auth().currentUser != null)	//if user exists log them out
	{
		firebase.auth().signOut();
	}
}
