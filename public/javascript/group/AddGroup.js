function ValidateGroup(){
	var keyToAdd = document.getElementById("key_in").value;
	if(keyToAdd.length === 0){
		//have user input key
		alert("Please input a key");
		return true;
	}
	var db = firebase.database().ref();	//get database refrence
	//access group id that the user input
	db.child('groups/'+keyToAdd).on('value', snapshot => { 
	if(snapshot.exists()) //if group exists continue, else notify user and leave
	{
		//access user in database
		db.child( '/users/' + firebase.auth().currentUser.uid + '/' + keyToAdd).once('value').then(users_snap => {
			var groupRef = db.child('groups/' + keyToAdd); 	//access group from database
			var groupName = "";
			groupRef.on('value', snap => {
				groupName = snap.val().title;	//get group name
			});
			if(!users_snap.exists()){	//if user does not have group already, add it, else notify them they have it
				const user = firebase.auth().currentUser;
				var updates = {};
				var gmt_data = {
					isAdmin: false,
					responded: false,
					u_email: user.email
				}
				//update and notify user of success
				updates['/users/' + user.uid + '/' + keyToAdd] = false;
				updates['/group_member_table/' + keyToAdd + '/' + user.uid] = gmt_data;
				firebase.database().ref().update(updates);
				document.getElementById("result").textContent = groupName + " has been successfully added to your groups";
			}
			else
			{
				document.getElementById("result").textContent = groupName + " already exists in your groups";
			
			}
		});
	}
	else
	{
		document.getElementById("result").textContent = "This key is invalid, please ensure the key has no typos."
	}
	});
}
