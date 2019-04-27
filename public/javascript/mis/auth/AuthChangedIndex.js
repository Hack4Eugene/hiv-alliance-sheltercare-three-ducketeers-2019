firebase.auth().onAuthStateChanged(firebaseUser => {
         if(firebaseUser) {
	//if user logs in, send them to main
		 toMainPage();
         }
 });

